import type { PageServerLoad } from './$types';
import browserDetect from 'browser-detect';

export const load: PageServerLoad = async ({ url, request }) => {
	// Get dynamic parameter from URL query string
	const devParam = url.searchParams.toString();

	// Function to generate deep link with query parameter
	function generateDeepLinkWithParams() {
		return `tiptop-taxi-dev://trytiptop.app/taxi/dev?${devParam}`;
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
	const deepLinkUrl = generateDeepLinkWithParams();

	// Additional deep link methods for better compatibility
	const deepLinkMethods = {
		primary: deepLinkUrl,
		fallback: `kubak-dev://kubak.co/taxi/dev?${devParam}`,
		universal: `https://kubak.co/taxi/dev?${devParam}`
	};

	console.log('Server-side Detection:', {
		browser: currentBrowser,
		os: currentOS,
		isAndroid: isAndroid,
		isIOS: isIOS,
		devParam: devParam,
		userAgent: userAgent,
		browserInfo: browserInfo
	});

	return {
		isAndroid,
		isIOS,
		currentBrowser,
		currentOS,
		devParam,
		deepLinkUrl,
		deepLinkMethods,
		shouldRedirectImmediately: true
	};
};
