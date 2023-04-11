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
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${trackingID}`}
                />
                <Script
                    id="data-partytown-config"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                                  window.dataLayer = window.dataLayer || [];
                                  function gtag(){dataLayer.push(arguments);}
                                  gtag('js', new Date());
                                  gtag('config', '${trackingID}', {
                                    page_path: window.location.pathname,
                                  });
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
