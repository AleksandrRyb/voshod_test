export default function Layout({
    children,
    itemModal
}: {
    children: React.ReactNode
    itemModal: React.ReactNode
}) {
    return (
        <>
            {itemModal}
            {children}
        </>
    )
}