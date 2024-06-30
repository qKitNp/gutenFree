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
		class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-hidden text-black"
	>
		{#each thumbs.books as book}
			<a href="/app/read" target="_blank" class="shrink-0 w-60 snap-start">
				<div class="w-60 p-4 h-100 bg-amber-50 rounded-xl flex flex-col gap-1 font-cond">
					<img
						class="rounded-container-token object-cover h-60 2/3 w-full hover:brightness-125"
						src={book.BookThumbnail}
						alt={book.Title}
						title={book.Title}
						loading="lazy"
					/>
					<span class="text-3xl font-conf font-bold">
						{book.Title}
					</span>
					<div class="text-md flex flex-col lowercase mt-1 font-normal">
						<span class="text-ellipsis">
							genre : {book.Genre}
						</span>
						<span class="text-ellipsis">
							authored by : {book.Author}
						</span>
						<span class="text-ellipsis">
							language : english
						</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
	<!-- Button-Right -->
	<button type="button" class="btn-icon btn-icon-sm variant-filled" on:click={multiColumnRight}>
		<span class="material-symbols-outlined"> chevron_right </span>
	</button>
</div>
