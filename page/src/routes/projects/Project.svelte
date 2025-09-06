<script>
    import { languageMap } from "$lib";

    /** @type {App.Project} */
    export let project;
</script>

<div class="card card-border bg-base-100 w-full">
    <div class="card-body flex flex-col">
        <span class="text-lg">{project.name}</span>

        <span class="text-sm py-1">{project.desc}</span>

        <div class="flex gap-1 flex-wrap w-full">
            {#each project.stack as tag}
                <span class="badge inline-block w-fit">{languageMap[tag]}</span>
            {/each}
        </div>

        <div class="grow"></div>

        <div class="join max-md:join-vertical text-center">
            {#if project.repo}
                <a class="btn join-item" href={`https://github.com/${project.repo}`}>Repo</a>
            {/if}
            {#if project.url}
                <a class="btn join-item" href={project.url}>Website</a>
            {/if}
        </div>
    </div>
</div>
