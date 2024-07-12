<script lang="ts">
	import {
		Grid,
		Image,
		Container,
		Title,
		Center,
		Button,
		Stack,
	} from "@svelteuidev/core";
</script>

<Container>
	<Grid spacing="xl" cols={10} align="center" justify="flex-start">
		<Grid.Col sm={6}>
			<Center>
				<Image
					src="https://github.com/immccn123.png"
					width={400}
					height={400}
					fit="contain"
					usePlaceholder
				/>
			</Center>
		</Grid.Col>
		<Grid.Col sm={4}>
			<Stack>
				<div>
					<Title order={1}>Imken</Title>
					<Title order={2}>@immccn123</Title>
				</div>
				<div>
					<Grid spacing="xs" cols={8}>
						<Grid.Col sm={4}>
							<Button
								fullSize
								ripple
								variant="default"
								href="/projects/"
							>
								项目 / Projects
							</Button>
						</Grid.Col>
						<Grid.Col sm={4}>
							<Button
								fullSize
								ripple
								variant="default"
								href="/links/"
							>
								友情链接 / Links
							</Button>
						</Grid.Col>
						<Grid.Col sm={4}>
							<Button
								fullSize
								ripple
								variant="default"
								href="https://blog.imken.moe"
							>
								博客 / Blog
							</Button>
						</Grid.Col>
						<Grid.Col sm={4}>
							<Button
								fullSize
								ripple
								variant="default"
								href="https://status.imken.moe"
							>
								状态 / Status
							</Button>
						</Grid.Col>
						<Grid.Col sm={4}>
							<Button disabled fullSize ripple variant="default">
								Coming S∞n
							</Button>
						</Grid.Col>
					</Grid>
				</div>
			</Stack>
		</Grid.Col>
	</Grid>
</Container>
