<script lang="ts">
	import { ModeWatcher, systemPrefersMode } from "mode-watcher";
	import "../app.css";
	import { fade, fly } from "svelte/transition";
	import { decrypt } from "$lib/secret";

	export let data;

	let showText = false;
	let secretText = "";
	let dialog: HTMLDialogElement;
	let decrypted: string | undefined = undefined;

	const routeMap: Record<string, string> = {
		projects: "项目 · Projects",
		links: "友情链接 · Links",
	};

	systemPrefersMode.subscribe((value) => {
		if (value === "light")
			document.body.setAttribute("data-theme", "cupcake");
		else if (value === "dark")
			document.body.setAttribute("data-theme", "dim");
	});

	$: {
		try {
			const result = decrypt(secretText);
			if (result.endsWith("--- END OF CIPHERTEXT ---")) {
				decrypted = result;
				dialog.showModal();
			} else {
				decrypted = undefined;
			}
		} catch {
			decrypted = undefined;
		}
	}
</script>

<ModeWatcher />

<div class="min-h-screen h-full flex flex-col">
	{#if data.routes.length}
		<div
			in:fly={{ y: -100, duration: 300 }}
			out:fly={{ y: -100, duration: 300 }}
			class="navbar bg-base-100 mx-auto px-4"
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

	<main class="flex-grow mx-auto container">
		{#key data.url}
			<div
				in:fade={{ duration: 300, delay: 300 }}
				out:fade={{ duration: 300 }}
			>
				<slot />
			</div>
		{/key}
	</main>

	<footer
		class="footer bg-base-200 text-base-content p-4 mt-6 ease-in-out duration-300"
	>
		<aside>
			<!--
				svelte-ignore
				a11y-no-static-element-interactions
				a11y-click-events-have-key-events
			-->
			<span
				class="text-xl"
				on:click|preventDefault={() => (showText = true)}
			>
				Cry in Despair.
			</span>
			<span>Powered by SvelteKit</span>
		</aside>
		<div class="grid grid-cols-1">
			<a
				href="https://icp.gov.moe/?keyword=20222616"
				class="link link-primary w-full text-center"
			>
				萌ICP备20222616号
			</a>
			{#if showText}
				<input
					type="text"
					class="input input-ghost input-xs w-full"
					bind:value={secretText}
				/>
			{/if}
		</div>
	</footer>

	<dialog class="modal" bind:this={dialog}>
		<div class="modal-box">
			<h3 class="text-lg font-bold">一个秘密</h3>
			<h4 class="text-sm font-bold">An secret</h4>
			<pre class="py-4 font-mono break-all text-wrap">{decrypted}</pre>
			<p>You cannot close this window now.</p>
		</div>
	</dialog>
</div>
