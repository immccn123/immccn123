<script lang="ts">
    import {
        Card,
        Image,
        Group,
        Text,
        TypographyProvider,
        Title,
        Anchor,
    } from "@svelteuidev/core";

    import MarkdownIt from "markdown-it";
    import notice from "./notice.md?raw";
</script>

<Title order={1}>友情链接 · Links</Title>
{#await import("https://data.imken.moe/links.js")}
    <p>Loading…</p>
{:then links}
    {#each links.default as { url, name, description, avatar }}
        <Card
            withBorder
            style="display: inline-block; width: 160px; margin: 10px"
        >
            <Card.Section padding="lg">
                <Image
                    src={avatar}
                    height={160}
                    fit="contain"
                    alt={name}
                    usePlaceholder
                />
            </Card.Section>

            <div style="height: 10px;" />

            <Group position="apart">
                <Text weight={500}>
                    <Anchor href={url}>{name}</Anchor>
                </Text>
            </Group>

            <div style="height: 10px;" />

            <Text size="sm">{description}</Text>
        </Card>
    {/each}
{/await}

<TypographyProvider>
    <h3>关于添加友情链接的注意事项：</h3>
    <p>
        {@html new MarkdownIt().render(notice)}
    </p>
</TypographyProvider>
