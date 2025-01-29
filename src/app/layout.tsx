import Script from "next/script";
import { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
};

const siteConfig: SiteConfig = {
    name: "Aldercrest Massage + Facials",
    description: "I am a massage therapist and a holistic esthetician in Milwaukie Oregon.",
    url: "https://www.aldercrest.net",
    ogImage: "https://www.aldercrest.net/images/og.svg?v1",
};

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    authors: [
        {
            name: "ryanlegler",
            url: "https://github.com/ryanlegler",
        },
    ],
    keywords: [
        "massage therapist",
        "holistic esthetician",
        "Milwaukie Oregon",
        "Swedish massage",
        "deep tissue massage",
        "trigger point massage",
        "prenatal massage",
        "certified",
        "holistic facials",
        "Evan Healy product line",
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 950,
                height: 537,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        // images: [`${siteConfig.url}/images/og.png`],
        creator: "@ryanlegler",
    },
    icons: {
        icon: "./favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
        // shortcut: {
        //     url: "./favicon-32x32.png",
        //     sizes: "32x32",
        // },
        // apple: {
        //     url: "./apple-touch-icon.png",
        //     sizes: "180x180",
        // },
    },
    // manifest: `/site.webmanifest`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <Analytics />
                <Script
                    id="mcjs"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e93bae13d463fa569561b57b5/57007b245f0ade10b56b651dd.js")`,
                    }}
                />
            </head>
            <body className="flex justify-center w-full">
                <div className="flex max-w-[1200px] flex-col w-full px-0 sm:px-8">{children}</div>
            </body>
        </html>
    );
}
