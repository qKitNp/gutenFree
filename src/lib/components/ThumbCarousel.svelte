<script>
	let elemMovies;

	export let thumbs;

	function multiColumnLeft() {
		let x = elemMovies.scrollWidth;
		if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
		elemMovies.scroll(x, 0);
	}

	function multiColumnRight() {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1)
			x = elemMovies.scrollLeft + elemMovies.clientWidth;
		elemMovies.scroll(x, 0);
	}
</script>

<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<!-- svelte-ignore missing-declaration -->
	<button type="button" class="btn-icon btn-icon-sm variant-filled" on:click={multiColumnLeft}>
		<!-- svelte-ignore missing-declaration -->
		<span class="material-symbols-outlined"> chevron_left </span>
	</button>
	<!-- Carousel -->
	<div
		bind:this={elemMovies}
		class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-hidden"
	>
		{#each thumbs.books as book}
			<a href={book.url} target="_blank" class="shrink-0 w-48 snap-start">
				<img
					class="rounded-container-token object-cover h-full hover:brightness-125"
					src={book.BookThumbnail}
					alt={book.name}
					title={book.name}
					loading="lazy"
				/>
			</a>
		{/each}
	</div>
	<!-- Button-Right -->
	<button type="button" class="btn-icon btn-icon-sm variant-filled" on:click={multiColumnRight}>
		<span class="material-symbols-outlined"> chevron_right </span>
	</button>
</div>
