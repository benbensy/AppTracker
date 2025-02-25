export function MainTitle({children}: {
    children: React.ReactNode;
}) {
    return <p className="flex justify-center text-3xl">
        {children}
    </p>
}