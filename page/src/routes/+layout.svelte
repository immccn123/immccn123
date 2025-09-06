<script lang="ts">
	import "../app.css";
	import { fade, fly } from "svelte/transition";

	export let data;

	const routeMap: Record<string, string> = {
		projects: "项目 · Projects",
		links: "友情链接 · Links",
	};
</script>

<div class="min-h-screen h-full flex flex-col">
	{#if data.routes.length}
		<div
			in:fade={{ duration: 300, delay: 300 }}
			out:fade={{ duration: 300 }}
			class="navbar bg-base-100 mx-auto px-4 fixed"
		>
			<a class="btn btn-ghost btn-sm text-xl mr-0" href="/">Imken</a>
			<div class="breadcrumbs text-sm">
				<ul>
					<li></li>
					{#if routeMap[data.routes[0]] !== undefined}
						<li>
							<span class="ml-2">{routeMap[data.routes[0]]}</span>
						</li>
					{/if}
				</ul>
			</div>
		</div>
	{/if}

	<main class="mx-auto container mt-[5rem]">
		{#key data.url}
			<div
				in:fade={{ duration: 300, delay: 300 }}
				out:fade={{ duration: 300 }}
			>
				<slot />
			</div>
		{/key}
	</main>

	<div class="grow"></div>

	<footer
		class="
            footer bg-base-200 text-base-content p-4 mt-6 footer-horizontal
            ease-in-out duration-300
        "
	>
		<aside></aside>
		<a
			href="https://icp.gov.moe/?keyword=20222616"
			class="link link-primary"
		>
			萌ICP备20222616号
		</a>
	</footer>
</div>
