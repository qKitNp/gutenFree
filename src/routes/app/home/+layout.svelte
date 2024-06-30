<script>
	import '../../../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let action = "sign in";
	let url;
	let token = "";
	onMount(() => {
		window.addEventListener('keydown', (e) => {
			if (e.code === 'F3' || ((e.ctrlKey || e.metaKey) && e.code === 'KeyK')) {
				e.preventDefault();
				const search = document.querySelector('#search');
				search.focus();
			}
		});
	});
	onMount(() => {
		token = localStorage.getItem('auth_token');
		if (token) {
			action = 'sign out';
			url = '/logout';
		} else {
			action = 'sign in';
			url = '/login';
		}
	});
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-secondary-900 w-56 p-2" class="font-outfit">
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav text-md font-light">
			<ul>
				<li>
					<a href="/"
						><span class="text-md mx-1 material-symbols-outlined"> book_2 </span><span
							class="underline">Your Library</span
						></a
					>
				</li>
				<li>
					<a href="/discover"
						><span class="text-md mx-1 material-symbols-outlined"> explore </span><span
							>Discover</span
						></a
					>
				</li>
				<li>
					<a href="/shelves"
						><span class="text-md mx-1 material-symbols-outlined"> shelves </span><span
							>Shelves</span
						></a
					>
				</li>
				<li>
					<a href="/random"
						><span class="text-md mx-1 material-symbols-outlined"> shuffle </span><span>Random</span
						></a
					>
				</li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			background="dark:bg-tertiary-800"
		>
			<svelte:fragment slot="lead">
				<strong class="text-3xl p-1 font-extralight">gutenFree</strong>
			</svelte:fragment>
			<div class="flex items-center max-md:hidden">
				<span class="absolute text-[1.25rem] mx-2 text-md material-symbols-outlined"> search </span>
				<input
					id="search"
					class="input h-10 text-center"
					size="48"
					type="text"
					placeholder="⌘ + K"
				/>
			</div>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm text-tertiary-900 bg-primary-50"
					href={url}
					target="_blank"
					rel="noreferrer"
				>
					{action}
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
