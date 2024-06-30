<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	let name = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let errorMessage = '';

	async function handleSubmit(event) {
		event.preventDefault();

		if (password !== confirmPassword) {
			errorMessage = 'Passwords do not match.';
			return;
		}

		try {
			let data = JSON.stringify({
				name: name,
				email: email,
				password: password,
				passwordConfirm: confirmPassword,
				photo: ''
			});

			let config = {
				method: 'post',
				url: 'https://72e6-104-28-242-145.ngrok-free.app/api/auth/register',
				headers: {
					'Content-Type': 'application/json'
				},
				data: data
			};

			const res = await axios(config);

			errorMessage = res.data.message;
		} catch (error) {
			console.error('Error registering:', error);
			if (error.response && error.response.data) {
				errorMessage = error.response.data.message;
			} else {
				errorMessage = 'An error occurred during registration.';
			}
		}
	}

	onMount(() => {
		errorMessage = '';
	});
</script>


<div class="flex flex-col gap-4 w-screen h-full bg-tertiary-900 justify-center items-center">
	<div class="flex shadow-md w-full h-full items-center justify-center border border-white shadow-white">
		<form  on:submit={handleSubmit}>
				<label for="name">Name</label>
			<input class="bg-transparent w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400  mt-5" type="text" id="name" bind:value={name} required />
			<br />

			<label for="email">Email</label>
			<input class="bg-transparent w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400  mt-5" type="text" id="email" bind:value={email} required />
			<br />

			<label for="password">Password</label>
			<input class="bg-transparent w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400  mt-5" type="password" id="password" bind:value={password} required />
			<br />

			<label for="confirmPassword">Confirm Password</label>
			<input
				class="bg-transparent w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400  mt-5"
				type="password"
				id="confirmPassword"
				bind:value={confirmPassword}
				required
			/>
			<br />

			<button type="submit">Register</button>
			<br />

			<span class="text-red-500">{errorMessage}</span>
		</form>
	</div>
</div>
