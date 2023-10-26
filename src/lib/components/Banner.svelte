<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	const options = {
		rewind: true,

		autoplay: true
	};
</script>

<!-- <div class="">
	<img src="/banner4.jpg" class="" alt="" />
</div> -->
<Splide {options} aria-label="My Favorite Images">
	<SplideSlide>
		<img src="/banner1.jpg" alt="" />
	</SplideSlide>
	<SplideSlide>
		<img src="/banner2.jpg" alt="" />
	</SplideSlide>
	<SplideSlide>
		<img src="/banner3.jpg" alt="" />
	</SplideSlide>
	<SplideSlide>
		<img src="/banner4.jpg" alt="" />
	</SplideSlide>
</Splide>
<div class=" -mt-10 md:-mt-56" />

<style>
	img {
		mask-image: linear-gradient(to bottom, black, transparent);
	}
</style>
