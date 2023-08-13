'use client';

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset, }: { error: Error; reset: () => void;}) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html>
        <body className="h-screen w-screen bg-white center gap-6 flex-col">
            <h2 className="font-bold text-lg text-black">Something went wrong!</h2>
            <div className="center gap-6">
                <button className="bg-transparent border border-blue px-6 py-4 rounded-[25px] text-blue text-sm" onClick={() => reset()}>Try again</button>
                <Link href="/">
                    <button className="px-6 py-4 rounded-[25px] text-sm text-white bg-blue">Back Home</button>
                </Link>
            </div>
        </body>
        </html>
    )
}