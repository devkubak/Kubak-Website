<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Props from server
	export let data: {
		isAndroid: boolean;
		isIOS: boolean;
		currentBrowser: string;
		currentOS: string;
		devParam: string;
		deepLinkUrl: string;
		deepLinkMethods: {
			primary: string;
			fallback: string;
			universal: string;
			intent: string | null;
		};
		shouldRedirectImmediately: boolean;
	};

	let progressWidth = 0;
	let countdown = 10;
	let progressInterval: NodeJS.Timeout | null = null;
	let countdownInterval: NodeJS.Timeout | null = null;

	function redirectToAppStore() {
		if (browser) {
			const appStoreUrl = data.isAndroid
				? 'https://play.google.com/store/apps/details?id=co.kubak.city&hl=en'
				: 'https://apps.apple.com/iq/app/kubak/id1460687618';
			window.location.href = appStoreUrl;
		}
	}

	function tryDeepLinkFirst() {
		if (!browser) return;

		let appOpened = false;

		// Track if page becomes hidden (indicates app opened)
		const handleVisibilityChange = () => {
			if (document.hidden) {
				appOpened = true;
			}
		};

		document.addEventListener('visibilitychange', handleVisibilityChange);

		// Method 1: Android Intent URL (most effective for Android)
		if (data.isAndroid && data.deepLinkMethods.intent) {
			window.location.href = data.deepLinkMethods.intent;
		}

		// Method 2: Direct deep link
		window.location.href = data.deepLinkMethods.primary;

		// Method 3: Try with iframe for iOS (bypasses some restrictions)
		if (data.isIOS) {
			const iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			iframe.src = data.deepLinkMethods.primary;
			document.body.appendChild(iframe);

			// Remove iframe after a short delay
			setTimeout(() => {
				if (document.body.contains(iframe)) {
					document.body.removeChild(iframe);
				}
			}, 100);
		}

		// Check after 12 seconds if app opened
		setTimeout(() => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);

			// If app didn't open, just stay on the same page
			// No redirect, just clean up the event listener
		}, 12000);
	}

	function startProgressBar() {
		if (!browser) return;

		// Clear any existing intervals
		if (progressInterval) {
			clearInterval(progressInterval);
		}
		if (countdownInterval) {
			clearInterval(countdownInterval);
		}

		progressWidth = 0;
		countdown = 10;

		// Start countdown timer
		countdownInterval = setInterval(() => {
			countdown--;
			if (countdown <= 0) {
				if (countdownInterval) {
					clearInterval(countdownInterval);
				}
				// When countdown reaches zero, stay on the same page
				// No redirect, just stop the countdown
			}
		}, 1000);

		// Start progress bar
		progressInterval = setInterval(() => {
			progressWidth += 1;
			if (progressWidth >= 100) {
				if (progressInterval) {
					clearInterval(progressInterval);
				}
				// Progress bar reaches 100%, stay on the same page
				// No redirect, just stop the progress bar
			}
		}, 100); // 10 seconds total (100 steps * 100ms = 10 seconds)
	}

	onMount(() => {
		if (!browser) return;

		console.log('Client-side Detection:', {
			browser: data.currentBrowser,
			os: data.currentOS,
			isAndroid: data.isAndroid,
			isIOS: data.isIOS,
			devParam: data.devParam,
			deepLinkUrl: data.deepLinkUrl,
			deepLinkMethods: data.deepLinkMethods
		});

		// Try to open deep link immediately for ALL devices
		if (browser && data.shouldRedirectImmediately) {
			// Try immediately for all devices
			tryDeepLinkFirst();

			// Try again after a very short delay for better success rate
			setTimeout(() => {
				tryDeepLinkFirst();
			}, 50);

			// Try a third time with different method
			setTimeout(() => {
				if (data.isAndroid && data.deepLinkMethods.intent) {
					window.location.href = data.deepLinkMethods.intent;
				}
			}, 150);
		}

		// Start the progress bar for all devices
		// Start timer after a short delay to ensure everything is loaded
		setTimeout(() => {
			startProgressBar();
		}, 500);

		// Clean up interval on component destroy
		return () => {
			if (progressInterval) {
				clearInterval(progressInterval);
			}
			if (countdownInterval) {
				clearInterval(countdownInterval);
			}
		};
	});
</script>

<svelte:head>
	<title>KUBAK - Download App</title>
	<meta name="description" content="Download the KUBAK app for taxi in Iraq" />
</svelte:head>

<!-- Beautiful loading screen with logo watermark -->
<div
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100"
>
	<!-- Background decorative elements -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute left-20 top-20 h-32 w-32 rounded-full bg-orange-400 blur-xl"></div>
		<div class="absolute bottom-32 right-16 h-48 w-48 rounded-full bg-red-400 blur-xl"></div>
		<div
			class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-orange-300 blur-2xl"
		></div>
	</div>

	<!-- Logo watermark -->
	<div class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
		<img src="/images/kubak.svg" alt="KUBAK Logo" class="h-80 w-80 animate-pulse object-contain" />
	</div>

	<!-- Main content -->
	<div class="relative z-10 px-6 text-center">
		<!-- Logo -->
		<div class="mb-8 animate-bounce">
			<img
				src="/images/kubak.svg"
				alt="KUBAK"
				class="mx-auto h-24 w-24 object-contain drop-shadow-lg"
			/>
		</div>

		<!-- Title -->
		<h1 class="animate-fade-in mb-4 text-4xl font-bold text-gray-800">KUBAK</h1>

		<!-- Subtitle -->
		<p class="animate-fade-in-delay mb-8 text-lg text-gray-600">
			Taking you to the best taxi experience
		</p>

		<!-- Loading animation -->
		<div class="mb-8 flex items-center justify-center space-x-2">
			<div class="flex space-x-1">
				<div class="h-3 w-3 animate-bounce rounded-full bg-yellow-300"></div>
				<div
					class="h-3 w-3 animate-bounce rounded-full bg-yellow-300"
					style="animation-delay: 0.1s"
				></div>
				<div
					class="h-3 w-3 animate-bounce rounded-full bg-yellow-300"
					style="animation-delay: 0.2s"
				></div>
			</div>
		</div>

		{#if data.currentBrowser !== 'safari'}
			<!-- Timer and progress bar for all browsers -->
			<div class="mb-4">
				<p class="text-2xl font-bold text-gray-700">
					{countdown}
				</p>
				<p class="text-sm text-gray-500">seconds remaining</p>
			</div>
		{/if}

		<!-- Status text -->
		<p class="mb-6 animate-pulse text-sm text-gray-500">Redirecting to your app store...</p>

		<!-- Skip button -->
		<button
			on:click={redirectToAppStore}
			class="mb-6 transform rounded-full bg-yellow-400 px-6 py-3 font-semibold text-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-xl"
		>
			Skip & Go to Store
		</button>

		{#if data.currentBrowser !== 'safari'}
			<!-- Progress bar (10 seconds) -->
			<div class="mx-auto mt-6 h-2 w-64 overflow-hidden rounded-full bg-gray-200">
				<div
					class="h-full rounded-full bg-gradient-to-r from-yellow-200 to-yellow-300 transition-all duration-100"
					style="width: {progressWidth}%"
				></div>
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade-in-delay {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes progress {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	.animate-fade-in {
		animation: fade-in 0.8s ease-out;
	}

	.animate-fade-in-delay {
		animation: fade-in-delay 0.8s ease-out 0.3s both;
	}

	.animate-progress {
		animation: progress 3s ease-in-out infinite;
	}
</style>
