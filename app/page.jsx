"use client";

import Html5QrcodePlugin from "@/app/components/Html5QrcodePlugin";
import { ThemeProvider } from "next-themes";

export default function Home() {
    const test = () => {};

    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                <section className="text-center items-center max-w-lg">
                    <Html5QrcodePlugin
                        fps={10}
                        qrbox={250}
                        disableFlip={false}
                        qrCodeSuccessCallback={test}
                    />
                </section>
            </ThemeProvider>
        </>
    );
}

