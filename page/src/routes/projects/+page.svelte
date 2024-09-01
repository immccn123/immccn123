<script lang="ts">
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
            repo: "immccn123/vjmirror-link",
            desc: "VJudge 镜像/反代",
            stack: ["c#", "dotnet"],
        },
    ];
</script>

<h2 class="text-xl text-center">Active</h2>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each active as project}
    <div class="flex">
        <Project {project} />
        </div>
    {/each}
</div>

<h2 class="text-xl text-center">Archived</h2>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each archived as project}
    <div class="flex">
        <Project {project} />
        </div>
    {/each}
</div>
