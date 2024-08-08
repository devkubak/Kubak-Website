<script lang="ts">
    import { onMount } from "svelte";
  
  
      onMount(() => {
          redirectToStore();
      });
  function redirectToStore() {
          var userAgent = navigator.userAgent || navigator.vendor;
    // console.log(userAgent);
    
          // Android
          if (/android/.test(userAgent)) {
            // console.log('android');
              window.location.href = 'https://play.google.com/store/apps/details?id=co.kubak.city&hl=en&gl=US';
          }
          // iOS
          else if (/iPad|iPhone|iPod|iMac/.test(userAgent)) {
            // console.log('ios');
            
              window.location.href = 'https://apps.apple.com/us/app/kubak/id1460687618';
          }
          else {
            window.location.href = 'https://apps.apple.com/us/app/kubak/id1460687618';
        }
          // Other devices
          
          return {
              redirectToStore
          }
      }
  </script>