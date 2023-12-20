<script>
  import "../app.pcss";
  import "../input.css";
  import Navbar from '$lib/Components/Navbar.Component.svelte';
  import Footer from '$lib/Components/Footer.Component.svelte';
</script>

<Navbar />

<slot />
<Footer />

