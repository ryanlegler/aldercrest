import Script from "next/script";
import "./globals.css";

export const metadata = {
    title: "Aldercreast",
    description:
        "I am a massage therapist and a holistic esthetician in Milwaukie Oregon. Since 2005 I have been specializing in Swedish, deep tissue, trigger point, and prenatal massage. In 2008, I became a certified Dr. Hauschka esthetician and currently offer holistic facials utilizing the Evan Healy product line. I enjoy the work that I do and the joy it brings to my clients. I look forward to working with you.",
};

const trackingID = "UA-145058321-1";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <Script
                    strategy="worker"
                    src={`https://www.googletagmanager.com/gtag/js?id=${trackingID}`}
                />
                <script
                    type="text/partytown"
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${trackingID}', { 
                page_path: window.location.pathname,
            });
        `,
                    }}
                />

                <script
                    data-partytown-config
                    dangerouslySetInnerHTML={{
                        __html: `
          partytown = {
            lib: "/_next/static/~partytown/",
            forward: ["gtag"]           
          };
        `,
                    }}
                />
            </head>
            <body className="flex justify-center w-full">
                <div className="flex max-w-[1200px] flex-col w-full px-0 sm:px-8">{children}</div>
            </body>
        </html>
    );
}
