import './globals.css'

export const metadata = {
    title: 'Spotify clone',
    description: 'Listen to music'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <script src="https://kit.fontawesome.com/0212a5fcb5.js"></script>
            </head>
            <body className="bg-zinc-950 overflow-hidden text-zinc-50">{children}</body>
        </html>
    )
}
