<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { browser } from '$app/environment';

	let email = '';
	let password = '';
	let errorMessage = '';
	let token = "";
	if (browser) {
		token = localStorage.getItem('auth_token'); // Check for existing token on mount
	}
		async function handleSubmit(event) {
			if (browser) {
			event.preventDefault();

			try {
				const data = JSON.stringify({
					email,
					password
				});

				const config = {
					method: 'post',
					url: 'https://72e6-104-28-242-145.ngrok-free.app/api/auth/login',
					headers: {
						'Content-Type': 'application/json'
					},
					data
				};

				const res = await axios(config);

				if (res.data.token) {
					// Successful login, save token and redirect
					localStorage.setItem('auth_token', res.data.token);
					window.location.href = '/app/home'; // Redirect to protected route
				} else {
					errorMessage = res.data.message || 'Login failed.';
				}
			} catch (error) {
				console.error('Error logging in:', error);
				errorMessage = 'An error occurred during login.';
			}
		}
		}
	

	onMount(() => {
		errorMessage = '';
		// Check for existing token and redirect if valid (optional)
		if (token) {
			// Implement logic to validate token on server (recommended for security)
			// If valid, redirect to protected route
			//   window.location.href = '/dashboard';
		}
	});
</script>

<div class="flex flex-col gap-4 w-screen h-full bg-tertiary-900 justify-center items-center">
	<div
		class="flex shadow-md w-full h-full items-center justify-center border border-white shadow-white"
	>
		<form on:submit={handleSubmit}>
			<label for="email">Email</label>
			<input
				class="bg-transparent w-full px-8 py-4 rounded-full font-medium  border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 mt-5"
				type="text"
				id="email"
				bind:value={email}
				required
			/>

			<label for="password">Password</label>
			<input
				class="bg-transparent w-full px-8 py-4 rounded-full font-medium  border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 mt-5"
				type="password"
				id="password"
				bind:value={password}
				required
			/>

			<button type="submit">Login</button>

			<span class="text-red-500">{errorMessage}</span>
		</form>
	</div>
</div>
