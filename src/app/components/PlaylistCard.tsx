import Image from 'next/image'

export function PlaylistCard({ name }: { name: string }) {
    return (
        <div className="flex cursor-pointer item-center  gap-4 bg-teal-100 bg-opacity-10 w-full hover:bg-opacity-20 transition duration-500 ease-out rounded overflow-hidden">
            <Image src="/generic-image.webp" width={80} height={80} alt="Cover" />
            <p className="font-bold text-sm py-6">{name}</p>
        </div>
    )
}
