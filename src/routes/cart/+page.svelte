<script>
	import { cartStore } from '../../lib/stores/cartStore';
	const deleteFromCart = (id) => {
		cartStore.update((c) => {
			return c.filter((c) => c.id !== id);
		});
	};

	$: sum = $cartStore.reduce((total, item) => total + item.price, 0);
</script>

<div class="m-3 flex gap-5">
	<div class="bg-white flex-1 p-5">
		<h1 class="capitalize text-2xl font-semibold">shopping cart</h1>
		<hr class="mt-2" />
		{#if $cartStore.length === 0}
			<p class="text-center">empty</p>
		{:else}
			{#each $cartStore as { title, price, image, desc, id }}
				<div class="flex gap-2 p-2">
					<img src={image} class="w-44 h-44" alt="" />
					<div class="space-y-2">
						<p class="text-lg">
							{title}
						</p>
						<p class="text-sm text-gray-700">
							{desc}
						</p>
						<b> ${price} </b>

						<button
							on:click={() => {
								deleteFromCart(id);
							}}
							class="rounded-md bg-[#F7CA00] active:shadow capitalize text-sm shadow-md p-1"
						>
							delete
						</button>
					</div>
					<hr />
				</div>
				<hr class="mt-2" >
			{/each}
		{/if}
	</div>
	<div class="bg-white p-5 space-y-2 h-fit w-[400px]">
		<p class="text-lg">Subtotal ({$cartStore.length} items): <b> ${sum} </b></p>
		<p>
			<input type="checkbox" name="" id="" />
			This order contains a gift
		</p>
		<button class="w-full rounded-md bg-[#F7CA00] capitalize text-sm shadow-md py-1">
			proceed to checkout
		</button>
	</div>
</div>
