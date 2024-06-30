<script>
	import CardCarousel from '../../../lib/components/CardCarousel.svelte';
	import BannerCarousel from '../../../lib/components/BannerCarousel.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	let token;
	async function fetch_books() {
		try {
			let config = {
				method: 'get',
				url: 'https://72e6-104-28-242-145.ngrok-free.app/api/users/books',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token
				}
			};

			const res = await axios(config);
			console.log(res.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	let thumbs = {
		books: [
			{
				ID: '8f4687e6-363e-11ef-b9f8-141877a3551b',
				Title: 'Metamorphosis',
				Author: 'Franz Kafka',
				Description: 'okay let me write',
				BookThumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7dc0f645138573.5827c0931efb7.jpg',
				Bookcontent: 'bafkreier5xc2qview6vycrlhtq2zpjud3clrdf5fo3aeleaocy2mlmopie',
				Genre: 'novel',
				UserID: '988adab2-3633-11ef-b550-141877a3551b',
				CreatedAt: '2024-06-29T23:09:39.141017497+05:30',
				UpdatedAt: '2024-06-29T23:09:39.141017739+05:30'
			},
			{
				ID: '97b0704a-363f-11ef-b9f8-141877a3551b',
				Title: 'War and Peace',
				Author: 'Leo Tolstoy',
				Description: 'okay let me write',
				BookThumbnail: 'https://img-fotki.yandex.ru/get/9118/24302342.109/0_904ff_2708d765_orig',
				Bookcontent: 'bafkreier5xc2qview6vycrlhtq2zpjud3clrdf5fo3aeleaocy2mlmopie',
				Genre: 'novel',
				UserID: '988adab2-3633-11ef-b550-141877a3551b',
				CreatedAt: '2024-06-29T23:17:02.753613308+05:30',
				UpdatedAt: '2024-06-29T23:17:02.753613442+05:30'
			},
			{
				ID: 'b32de642-363f-11ef-a181-141877a3551b',
				Title: 'Oliver Twist',
				Author: 'Charles Dickens',
				Description: 'okay let me write',
				BookThumbnail: 'https://i.pinimg.com/736x/b8/74/bc/b874bc15e10618000be74b5ef4ed188f.jpg',
				Bookcontent: 'ipfs://bafkreier5xc2qview6vycrlhtq2zpjud3clrdf5fo3aeleaocy2mlmopie/',
				Genre: 'novel',
				UserID: '988adab2-3633-11ef-b550-141877a3551b',
				CreatedAt: '2024-06-29T23:17:48.874301508+05:30',
				UpdatedAt: '2024-06-29T23:17:48.874302043+05:30'
			},
			{
				ID: 'f59d4270-363f-11ef-9531-141877a3551b',
				Title: 'Moby Dick',
				Author: 'Herman Melville',
				Description: 'okay let me write',
				BookThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPZ41ggPwtgt_lv5bWAzaAgGcmk9uedH-Mg&s',
				Bookcontent:
					'https://bafkreier5xc2qview6vycrlhtq2zpjud3clrdf5fo3aeleaocy2mlmopie.ipfs.w3s.link',
				Genre: 'novel',
				UserID: '988adab2-3633-11ef-b550-141877a3551b',
				CreatedAt: '2024-06-29T23:19:40.333727984+05:30',
				UpdatedAt: '2024-06-29T23:19:40.333728108+05:30'
			},
			
		]
	};

	let thumbs2 = {
		books: [
			{
				ID: '8f4687e6-363e-11ef-b9f8-141877a3551b',
				Title: 'Metamorphosis',
				Author: 'Franz Kafka',
				Description: 'okay let me write',
				BookThumbnail: 'https://preview.redd.it/ns9vcsj7lle31.jpg?width=1080&crop=smart&auto=webp&s=b2bdb83e311d1cb5edcf73c521e7eb93c718ec00',
				Bookcontent: 'bafkreier5xc2qview6vycrlhtq2zpjud3clrdf5fo3aeleaocy2mlmopie',
				Genre: 'novel',
				UserID: '988adab2-3633-11ef-b550-141877a3551b',
				CreatedAt: '2024-06-29T23:09:39.141017497+05:30',
				UpdatedAt: '2024-06-29T23:09:39.141017739+05:30'
			},
			{
				ID: '97b0704a-363f-11ef-b9f8-141877a3551b',
				Title: 'War and Peace',
				Author: 'Leo Tolstoy',
				Description: 'okay let me write',
				BookThumbnail: 'https://lookatittiswayvc.wordpress.com/wp-content/uploads/2013/06/landscape-with-rainbow-1636-rubens.jpg',
				Bookcontent: 'bafkreier5xc2qview6vycrlhtq2zpjud3clrdf5fo3aeleaocy2mlmopie',
				Genre: 'novel',
				UserID: '988adab2-3633-11ef-b550-141877a3551b',
				CreatedAt: '2024-06-29T23:17:02.753613308+05:30',
				UpdatedAt: '2024-06-29T23:17:02.753613442+05:30'
			},
			{
				ID: 'b32de642-363f-11ef-a181-141877a3551b',
				Title: 'Oliver Twist',
				Author: 'Charles Dickens',
				Description: 'okay let me write',
				BookThumbnail: 'https://eclecticlight.co/wp-content/uploads/2021/02/vanwittelflorence.jpg',
				Bookcontent: 'ipfs://bafkreier5xc2qview6vycrlhtq2zpjud3clrdf5fo3aeleaocy2mlmopie/',
				Genre: 'novel',
				UserID: '988adab2-3633-11ef-b550-141877a3551b',
				CreatedAt: '2024-06-29T23:17:48.874301508+05:30',
				UpdatedAt: '2024-06-29T23:17:48.874302043+05:30'
			},
			{
				ID: 'f59d4270-363f-11ef-9531-141877a3551b',
				Title: 'Moby Dick',
				Author: 'Herman Melville',
				Description: 'okay let me write',
				BookThumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6285bd6f-8c8b-4dd6-aaf9-8c057199b9a3/dg8zvyx-782bb62f-6ec8-491c-8503-18c15062f22e.png/v1/fill/w_1192,h_670,q_70,strp/distopian_scifi_landscape_by_tirinium1_dg8zvyx-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNjI4NWJkNmYtOGM4Yi00ZGQ2LWFhZjktOGMwNTcxOTliOWEzXC9kZzh6dnl4LTc4MmJiNjJmLTZlYzgtNDkxYy04NTAzLTE4YzE1MDYyZjIyZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EokSLR79Gy5JtcHbs95UcMSgPOb_KIhpEonW1ckezmg',
				Bookcontent:
					'https://bafkreier5xc2qview6vycrlhtq2zpjud3clrdf5fo3aeleaocy2mlmopie.ipfs.w3s.link',
				Genre: 'novel',
				UserID: '988adab2-3633-11ef-b550-141877a3551b',
				CreatedAt: '2024-06-29T23:19:40.333727984+05:30',
				UpdatedAt: '2024-06-29T23:19:40.333728108+05:30'
			},
			
		]
	};

	onMount(() => {
		token = localStorage.getItem('auth_token');
		console.log(token);
		fetch_books();
	});
</script>

<div class="p-8 flex-col">
	<div class="flex flex-col gap-4">
		<div class="text-2xl mx-12">Your Favorites</div>
		<div>
			<BannerCarousel thumbs = {thumbs2} />
		</div>
	</div>
	<div class="flex mt-4 flex-col gap-4">
		<div class="text-2xl mx-12">Your Collection</div>
		<div>
			<CardCarousel {thumbs} />
		</div>
	</div>
</div>
