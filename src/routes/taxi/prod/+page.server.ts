import type { PageServerLoad } from './$types';
import browserDetect from 'browser-detect';

export const load: PageServerLoad = async ({ url, request }) => {
	// Get dynamic parameter from URL query string
	const prodParam = url.searchParams.toString();

	// Function to generate deep link with query parameter
	function generateDeepLinkWithParams() {
		return `kubak-prod://kubak.co/taxi/prod?${prodParam}`;
	}

	function getAppStoreUrl(isAndroid: boolean, isIOS: boolean) {
		// Use server-side detected device info
		if (isAndroid) {
			return 'https://play.google.com/store/apps/details?id=co.kubak.city&hl=en';
		}

		// Check if device is iPhone/iPad/iPod
		if (isIOS) {
			return 'https://apps.apple.com/iq/app/kubak/id1460687618';
		}

		// For all other devices
		return 'https://kubak.co/';
	}

	// Get user agent from request headers
	const userAgent = request.headers.get('user-agent') || 'unknown';

	// Detect browser and OS using browser-detect package
	const browserInfo = browserDetect(userAgent);
	const currentBrowser = browserInfo.name || 'unknown';
	const currentOS = browserInfo.os || 'unknown';

	// Set device flags
	const isAndroid = currentOS.toLowerCase().includes('android');
	const isIOS = currentOS.toLowerCase().includes('ios') || currentOS.toLowerCase().includes('mac');

	// Generate URLs
	const appStoreUrl = getAppStoreUrl(isAndroid, isIOS);
	const deepLinkUrl = generateDeepLinkWithParams();

	// Additional deep link methods for better compatibility
	const deepLinkMethods = {
		primary: deepLinkUrl,
		fallback: `kubak-prod://kubak.co/taxi/prod?${prodParam}`,
		universal: `https://kubak.co/taxi/prod?${prodParam}`,
		intent: isAndroid
			? `intent://kubak.co/taxi/prod?${prodParam}#Intent;scheme=kubak-prod;package=co.kubak.city;end`
			: null
	};

	console.log('Server-side Detection:', {
		browser: currentBrowser,
		os: currentOS,
		isAndroid: isAndroid,
		isIOS: isIOS,
		prodParam: prodParam,
		userAgent: userAgent,
		browserInfo: browserInfo
	});

	return {
		isAndroid,
		isIOS,
		currentBrowser,
		currentOS,
		prodParam,
		appStoreUrl,
		deepLinkUrl,
		deepLinkMethods,
		shouldRedirectImmediately: true
	};
};
