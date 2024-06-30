<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	
	let token = "";
	if (browser) {
		token = localStorage.getItem('auth_token'); // Check for existing token on mount
	}
	onMount(() => {
		// Check for existing token and redirect if valid (optional)
		if (token) {
			localStorage.removeItem('auth_token');
			window.location.href = '/lander'
		}
	});
</script>

