<script>
    import '../global.css';
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>Default Detector</title>
  <meta name="description" content="This is an awesome SvelteKit application.">
  <link rel="stylesheet" href="https://example.com/styles.css">
</svelte:head>

<Header />
<slot />
<Footer />