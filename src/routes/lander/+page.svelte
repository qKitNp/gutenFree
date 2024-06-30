<script>
    import CardCarousel from '../../lib/components/CardCarousel.svelte';
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
            {
				ID: '97b0704a-363f-11ef-b9f8-141877a3551b',
				Title: `Gulliver's Travel`,
				Author: 'Jonathan Swift',
				Description: 'okay let me write',
				BookThumbnail: 'https://cdn.britannica.com/90/125990-050-F5E91F84/Lemuel-Gulliver-edition-illustration-Lilliput-Gullivers-Travels.jpg',
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
	};;
</script>

<div class="bg-secondary-800">
    <div class="w-full flex justify-end">
        <section class="text-right w-[32rem] h-fit text-[1.5rem] font-outfit float-right p-4">
            gutenFree is a web3 platform for uncensorable e-books, journalism, and publishing.
        </section>
    </div>
    <div class="p-[1.5rem] flex flex-col gap-2 mt-12">
        <section class=" w-full h-fit text-5xl font-outfit">
            <a href="/app/editor" class="cursor-pointer underline">Write</a> without borders,
        </section>
        <section class=" w-full h-fit text-5xl font-outfit">
            <a href="/app/home" class="cursor-pointer underline">Read</a> without fear.
        </section>
    </div>
    <div class="flex mt-8 flex-col gap-4 p-8">
		<div class="text-2xl mx-12">browse</div>
		<div>
			<CardCarousel {thumbs}/>
		</div>
	</div>
</div>