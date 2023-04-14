import Script from "next/script";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Aldercrest Massage + Facials",
    openGraph: {
        images: [
            {
                url: "./aldercrest.svg",
                width: 413,
                height: 523,
            },
        ],
    },
    icons: {
        icon: "./favicon.ico",
        shortcut: {
            url: "./favicon-32x32.png",
            sizes: "32x32",
        },
        apple: {
            url: "./apple-touch-icon.png",
            sizes: "180x180",
        },
    },
    description:
        "I am a massage therapist and a holistic esthetician in Milwaukie Oregon. Since 2005 I have been specializing in Swedish, deep tissue, trigger point, and prenatal massage. In 2008, I became a certified Dr. Hauschka esthetician and currently offer holistic facials utilizing the Evan Healy product line. I enjoy the work that I do and the joy it brings to my clients. I look forward to working with you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <Script
                    data-token="bed0e4f7-e380-44d2-a9cf-f2e0ca0463af"
                    strategy="afterInteractive"
                    src={`https://beamanalytics.b-cdn.net/beam.min.js`}
                />
            </head>
            <body className="flex justify-center w-full">
                <div className="flex max-w-[1200px] flex-col w-full px-0 sm:px-8">{children}</div>
            </body>
        </html>
    );
}
