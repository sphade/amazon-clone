<script>
	import Banner from '../lib/components/Banner.svelte';
	import ProductCard from '../lib/components/ProductCard.svelte';
	export let data;
	const { products } = data;
</script>

<Banner />
<div class="grid grid-cols-5 gap-3 absolute p-5">
	{#each products as product}
		<ProductCard id={product.id} price={product.price} desc={product.description} image={product.image} title={product.title} />
	{/each}
</div>
