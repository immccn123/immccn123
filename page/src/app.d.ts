// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		type TechStack = 'c#' | 'js' | 'ts' | 'py' | 'pgsql' | 'redis' | 'railway' | 'remix' | 'react'
			| 'next' | 'svelte' | 'vue' | 'nuxt' | 'astro' | 'vite' | 'express' | 'node' | 'mongo'
			| 'rust' | 'dotnet' | 'tailwind' | 'bootstrap' | 'chakra' | 'daisy' | 'radix' | 'wasm' | 'java' | 'kt'
			| 'jsdoc-typed' | 'unifiedjs' | 'vercel' | 'jupyter' | 'docker' | 'nixpack' | 'dart' | 'go'

		interface Project {
			name: string;
			repo?: string;
			url?: string;
			desc: string;
			stack: TechStack[];
		}
	}
}

export { };
