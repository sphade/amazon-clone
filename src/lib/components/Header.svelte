<script>
	import { Backpack, Crosshair2 } from 'radix-icons-svelte';
	import Searchbar from './Searchbar.svelte';
	import { cartStore } from '../stores/cartStore';
</script>

<header class="bg-[#131921] py-3 flex gap-5 px-5 items-center text-white">
	<a href='/' class="text-lg font-semibold">amazon</a>

	<div class="flex items-center text-xs capitalize">
		<Crosshair2 />
		<div>
			<p class="text-gray-300">delivery to</p>
			<b>Nigeria </b>
		</div>
	</div>
	<Searchbar />
	<a href="/cart" class="flex gap-1 items-center">
		<p class="text-orange-500">{$cartStore.length}</p>
		<Backpack />
		<p>cart</p>
	</a>
</header>
