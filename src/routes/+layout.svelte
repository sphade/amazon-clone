<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import SubHeader from '../lib/components/SubHeader.svelte';
</script>

<Header />
<SubHeader />
<main class="">
	<slot />
</main>
