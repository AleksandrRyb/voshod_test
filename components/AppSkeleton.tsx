import { Skeleton, SkeletonProps, Flex } from '@mantine/core';

interface AppSkeleton extends SkeletonProps {
    items: number
}

export default function AppSkeleton({ items, ...props}: AppSkeleton) {

    return (
        <Flex
            justify="center"
            align="center"
            direction="column"
            gap="lg"
            w="100vw"
            h="80vh"
        >
            {Array.from(Array(items), (s, i) => {
                return <Skeleton {...props} key={i} w="120px" h="36px" />
            })}
        </Flex>
    )
}