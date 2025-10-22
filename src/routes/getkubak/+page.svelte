<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    redirectToStore();
  });
  function redirectToStore() {
    var userAgent = navigator.userAgent || navigator.vendor;

    // Android
    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=co.kubak.city&hl=en&gl=US";
    }
    // iOS
    else if (/iPad|iPhone|iPod|iMac/.test(userAgent)) {
      window.location.href = "https://apps.apple.com/us/app/kubak/id1460687618";
    } else {
      window.location.href = "https://apps.apple.com/us/app/kubak/id1460687618";
    }

    return {
      redirectToStore,
    };
  }
</script>
