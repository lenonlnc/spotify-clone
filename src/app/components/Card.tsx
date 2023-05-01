import Image from 'next/image'

export function Card({ name, creator }: { name: string; creator: string }) {
    return (
        <div className="py-4">
            <div className="p-4 bg-zinc-900 cursor-pointer hover:bg-zinc-800 transition duration-500 ease-out rounded w-max flex flex-col gap-2">
                <Image className="rounded" src="/NC.jpeg" width={150} height={150} alt="show" />
                <p className="text-sm text-zinc-50">{name}</p>
                <p className="text-xs text-zinc-600">{creator}</p>
            </div>
        </div>
    )
}
