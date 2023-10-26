<script>
	import { ChevronDown, MagnifyingGlass } from 'radix-icons-svelte';
</script>

<div class="rounded-md flex-1 flex overflow-hidden">
	<button class="bg-gray-300 basis-12 flex justify-center items-center text-gray-800">
		<span>All</span>
		<ChevronDown />
	</button>
	<input type="text" class="bg-white px-2 flex-1 outline-none h-10" placeholder="search amazon" />
	<button class="bg-[#FEBD69] text-gray-800 basis-12">
		<MagnifyingGlass class="w-7 h-7 mx-auto " />
	</button>
</div>
