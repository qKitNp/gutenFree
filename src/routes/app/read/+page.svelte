<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	let content = 'Loading...';
	let page = 1;
	let max = 100;
	let lang = 'en'; // Default language
	let tmp;
	let synth;
	let utterThis;

	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'hi', name: 'Hindi' }
	];

	onMount(async () => {
		page = 1;
		max = 100;
		await doPost();

		synth = window.speechSynthesis;
		utterThis = new SpeechSynthesisUtterance(content);
	});

	function speak_now() {
		utterThis = new SpeechSynthesisUtterance(content.replaceAll("<p>", " ").replaceAll("</p>", " "));
		utterThis.lang = 'en-US';
		synth.speak(utterThis);
	}

	function stop_now() {
		synth.cancel()
	}

	async function doPost() {
		try {
			const res = await axios.post('http://192.168.172.142:8000/getpage', {
				page
			});

			tmp = res.data.response;

			if (lang == 'en') {
				content = tmp;
			} else {
				const res1 = await axios.post('http://192.168.172.142:5080/translate', {
					input: tmp.replaceAll('<p>', ' ').replaceAll('</p>', ' ')
				});
				content = res1.data.response;
			}
			max = res.data.max;
		} catch (error) {
			console.error('Error fetching data:', error);
			// Handle error gracefully (e.g., display an error message)
		}
	}

	function changeLanguage(newLang) {
		lang = newLang;
		doPost(); // Re-fetch data with the new language
	}
</script>

<div class="flex h-full w-full">
	<div
		id="actual-toolbar"
		class="transition-all w-fit px-4 gap-2 z-20 place-content-evenly items-center flex fixed h-12 right-0 bottom-4 rounded-l-xl shadow-sm shadow-black bg-white"
	>
	<button
			on:click={() => {speak_now()}}
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
		>
			<span class="material-symbols-outlined text-[2rem]"> resume </span>
		</button>
		<button
			on:click={() => {stop_now()}}
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
		>
			<span class="material-symbols-outlined text-[2rem]"> pause </span>
		</button>
		<span class="text-zinc-900 text-3xl mb-2 self-center">|</span>
		<button
			on:click={() => {
				page > 1 ? --page : console.log('not allowed');
				doPost();
			}}
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
		>
			<span class="material-symbols-outlined text-[2rem]"> arrow_left </span>
		</button>
		<span class="text-zinc-900 text-3xl mb-2 self-center">|</span>
		<span class="text-zinc-900 text-2xl self-center font-outfit">{page}</span>
		<span class="text-zinc-900 text-3xl mb-2 self-center">|</span>
		<button
			on:click={() => {
				page < max ? ++page : console.log('not allowed');
				doPost();
			}}
			class="h-8 w-8 text-black hover:bg-zinc-200 transition-all duration-200 rounded-md"
		>
			<span class="material-symbols-outlined text-[2rem]"> arrow_right </span>
		</button>

		<select
			on:change={(event) => changeLanguage(event.target.value)}
			class="ml-4 border text-black border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
		>
			{#each languages as language}
				<option class="text-black" value={language.code} selected={lang === language.code}>
					{language.name}
				</option>
			{/each}
		</select>
	</div>
	<div class=" flex !overflow-hidden w-full justify-center pt-4 bg-amber-100 text-black p-8">
		<article
			class="!overflow-y-scroll w-4/6 font-outfit text-[1.3rem] items-center py-4 p:my-8 flex flex-col gap-3"
		>
			{@html content}
		</article>
	</div>
</div>

<style>
	html,
	body {
		padding: 0px;
		margin: 0px;
		@apply bg-amber-100;
	}
</style>
