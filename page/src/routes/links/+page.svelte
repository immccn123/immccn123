{#await import("https://data.imken.moe/links.js")}
	<p>Loading…</p>
{:then links}
	<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
		{#each links.default as { url, name, description, avatar }}
			<a
				class="card bg-base-100 shadow-xl flex flex-col justify-between h-full
					hover:shadow-2xl hover:-translate-y-1 hover:bg-base-200
					ease-in-out duration-300"
				href={url}
			>
				<figure>
					<img class="w-full" src={avatar} alt={name} />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{name}</h2>
					<p>{description}</p>
				</div>
			</a>
		{/each}
	</div>

	<p class="text-center">
		<a
			class="btn btn-secondary btn-sm mx-4"
			href="https://shared.imken.moe/links/exchange"
		>
			友情链接交换 / 信息更新
		</a>
	</p>
{/await}
