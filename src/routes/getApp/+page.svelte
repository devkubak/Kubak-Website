<script lang="ts">
  import { onMount } from "svelte";


    onMount(() => {
        redirectToStore();
    });
function redirectToStore() {
        var userAgent = navigator.userAgent || navigator.vendor;

        // Android
        if (/android/.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=co.kubak.city&hl=en&gl=US';
        }
        // iOS
        else if (/iPad|iPhone|iPod/.test(userAgent)) {
            window.location.href = 'https://apps.apple.com/us/app/kubak/id1460687618';
        }
        // Other devices
        else {
            window.location.href = 'https://play.google.com/store/apps/details?id=co.kubak.city&hl=en&gl=US';
        }
        return {
            redirectToStore
        }
    }
</script>