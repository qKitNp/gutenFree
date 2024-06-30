import { join } from 'path';

import { skeleton } from '@skeletonlabs/tw-plugin';
import { darkera } from './src/darkera';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				outfit: ['Outfit', 'sans-serif'],
				cond: ["Fira Sans Condensed", 'sans-serif']
			}
		}
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					}
				],
				custom: [darkera]
			}
		})
	]
};
