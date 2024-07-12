<script lang="ts">
    import { Title } from "@svelteuidev/core";
    import Project from "./Project.svelte";

    const active: App.Project[] = [
        {
            name: "lg-solution-formatter",
            repo: "immccn123/lg-solution-formatter",
            desc: "A markdown formatter for Luogu Problem Solution Standards.",
            url: "https://tj.imken.dev",
            stack: ["js", "jsdoc-typed", "unifiedjs", "vue"],
        },
        {
            name: "Yangcong-tools",
            repo: "immccn123/Yangcong-tools",
            desc: "洋葱学园自动作业完成工具",
            stack: ["py"],
        },
        {
            name: "犇犇黑历史",
            url: "https://benben.imken.dev",
            desc: "保存洛谷犇犇的一个站。",
            stack: [
                "react",
                "rust",
                "pgsql",
                "node",
                "ts",
                "remix",
                "railway",
                "vercel",
            ],
        },
        {
            name: "Mug-Diffusion-Colab",
            repo: "immccn123/Mug-Diffusion-Colab",
            desc: "Run Mug-Diffusion on Google Colab!",
            stack: ["jupyter"],
        },
    ];

    // const inactive: App.Project[] = [];

    const archived: App.Project[] = [
        {
            name: "vjmirror",
            repo: "immccn123/vjmirror.link",
            desc: "VJudge 镜像/反代",
            stack: ["c#", "dotnet"],
        },
    ];
</script>

<Title order={1}>项目 · Projects</Title>

{#each active as project}
    <Project {project} />
{/each}

<Title order={2}>已归档的 · Archived</Title>
{#each archived as project}
    <Project {project} />
{/each}
