<script lang="ts">
    import {
        SvelteUIProvider,
        Stack,
        Center,
        Anchor,
        Breadcrumbs,
        AppShell,
        Container,
    } from "@svelteuidev/core";

    export let data;

    const routeMap: Record<string, string> = {
        projects: "项目 · Projects",
        links: "友情链接 · Links",
    };
</script>

<SvelteUIProvider>
    <AppShell>
        <Container slot="header">
            <Breadcrumbs>
                <Breadcrumbs.Item
                    href={data.routes.length === 0 ? undefined : "/"}
                >
                    Home
                </Breadcrumbs.Item>
                {#each data.routes as route}
                    {#if routeMap[route] !== undefined}
                        <Breadcrumbs.Item>{routeMap[route]}</Breadcrumbs.Item>
                    {/if}
                {/each}
            </Breadcrumbs>
        </Container>
        <Stack slot="default">
            <slot />
            <Center>
                <Anchor href="https://icp.gov.moe/?keyword=20222616">
                    萌ICP备20222616号
                </Anchor>
            </Center>
        </Stack>
    </AppShell>
</SvelteUIProvider>
