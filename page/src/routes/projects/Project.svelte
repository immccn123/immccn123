<script>
    import { languageMap } from "$lib";
    import { Anchor, Card, Text, Badge } from "@svelteuidev/core";

    /** @type {App.Project} */
    export let project;
</script>

<Card style="display: inline-block; margin: 10px; width: 300px; height: 160px">
    <Text weight={500}>{project.name}</Text>

    <div style="height: 10px;"></div>
    <Text>{project.desc}</Text>

    <div style="height: 10px;"></div>

    {#each project.stack as tag}
        <Badge color="gray" variant="outline" size="xs">
            {languageMap[tag]}
        </Badge>
        {" "}
    {/each}

    <div style="height: 10px;"></div>

    {#if project.repo}
        <Anchor href={`https://github.com/${project.repo}`}>Repo</Anchor>
    {/if}
    {#if project.url}
        <Anchor href={project.url}>Website</Anchor>
    {/if}
</Card>
