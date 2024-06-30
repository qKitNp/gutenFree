<script>
	import { onMount } from 'svelte';

	let a_toolbar;
	let b_toolbar;
	let easyMDE;
	let cl;
	let font = 'font-outfit';
	let container;
	let statusbar;

	onMount(() => {
		easyMDE = new EasyMDE({
			element: document.getElementById('textarea-main'),
			
		});

		easyMDE.toggleFullScreen();

		const toolbar = document.querySelector('.editor-toolbar');
		toolbar.classList.add('!hidden');
		a_toolbar = document.querySelector('#actual-toolbar');
		b_toolbar = document.querySelector('#show-toolbar');
		container = document.querySelector('.EasyMDEContainer');
		statusbar = document.querySelector('.editor-statusbar');
		show();
		container.classList.add(font, 'text-xl');
		statusbar.classList.add('!hidden');
	});

	function hide() {
		a_toolbar.classList.add('!hidden');
		b_toolbar.classList.remove('!hidden');
	}
	function show() {
		a_toolbar.classList.remove('!hidden');
		b_toolbar.classList.add('!hidden');
	}
	function bold() {
		easyMDE.toggleBold();
	}
	function underline() {
		easyMDE.value(easyMDE.value() + '<u></u>');
	}
	function italic() {
		easyMDE.toggleItalic();
	}
	function preview() {
		easyMDE.togglePreview();
	}
	function clean() {
		easyMDE.cleanBlock();
	}
	function cycle() {
		if (font == 'font-outfit') {
			container.classList.remove(font);
			font = 'font-serif';
			console.log(font);
			container.classList.add(font);
		} else {
			container.classList.remove(font);
			font = 'font-outfit';
			console.log(font);
			container.classList.add(font);
		}
	}
</script>

<div class="w-full h-full bg-white !float-right absolute">
	<div
		id="actual-toolbar"
		class="transition-all w-fit px-4 gap-2 z-20 place-content-evenly items-center flex fixed h-12 right-0 top-16 rounded-l-xl shadow-sm shadow-black bg-white"
	>
		<button
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
			on:click={() => bold()}
			><span class="material-symbols-outlined text-[2rem]"> format_bold </span></button
		>
		<button
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
			on:click={() => underline()}
			><span class="material-symbols-outlined text-[1.8rem] mt-1"> format_underlined </span></button
		>
		<button
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
			on:click={() => italic()}
			><span class="material-symbols-outlined text-[2rem]"> format_italic </span></button
		>
		<span class="text-zinc-900 text-3xl mb-2 self-center">|</span>
		<button
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
			on:click={() => clean()}
			><span class="material-symbols-outlined text-[2rem]"> format_align_justify </span></button
		>
		<span class="text-zinc-900 text-3xl mb-2 self-center">|</span>
		<button
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
			on:click={() => cycle()}
			><span class="material-symbols-outlined text-[2rem]"> serif </span></button
		>
		<span class="text-zinc-900 text-3xl mb-2 self-center">|</span>
		<button
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
			on:click={() => preview()}
			><span class="material-symbols-outlined text-[2rem]"> visibility </span></button
		>
		<span class="text-zinc-900 text-3xl mb-2 self-center">|</span>
		<button
			id="hide"
			on:click={() => hide()}
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
			><span class="material-symbols-outlined text-[2rem]"> arrow_right </span></button
		>
	</div>
	<div
		id="show-toolbar"
		class="transition-all font-outfit w-fit px-4 gap-2 z-20 place-content-evenly items-center flex fixed h-12 right-0 top-16 rounded-l-xl shadow-sm shadow-black bg-white"
	>
		<button
			id="hide"
			on:click={() => show()}
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
			><span class="material-symbols-outlined text-[2rem]"> arrow_left </span></button
		>
	</div>
	<textarea onchange="" class="text-black" id="textarea-main"></textarea>
</div>

<style>
</style>
