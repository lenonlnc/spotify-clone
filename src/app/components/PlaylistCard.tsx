export function PlaylistCard({ name }: { name: string }) {
    return (
        <div className="flex cursor-pointer item-center  gap-4 bg-teal-100 bg-opacity-10 w-full hover:bg-opacity-20 transition duration-500 ease-out rounded">
            <div className="w-20 rounded bg-zinc-950" />
            <p className="font-bold text-sm py-6">{name}</p>
        </div>
    )
}
