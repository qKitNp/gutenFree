<script>
	import '../../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-secondary-900 w-56 p-2" class="font-outfit">
    <svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			background="dark:bg-secondary-800"
		>
			<svelte:fragment slot="lead">
				<strong class="text-3xl p-1 font-extralight">gutenFree</strong>
			</svelte:fragment>
			
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm text-tertiary-900 bg-primary-50"
					href="/login"
					target="_blank"
					rel="noreferrer"
				>
					sign in
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
