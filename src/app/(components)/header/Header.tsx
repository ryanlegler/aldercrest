import React from "react";
import { Oswald } from "next/font/google";

// styled-components
import { StyledHeader, StyledLinks } from "./styledComponents";
import { HeaderProps } from "./types";

import Link from "next/link";

const oswald = Oswald({
    subsets: ["latin"],
    display: "swap",
});

function Header({ activeSegment }: HeaderProps) {
    const links: { slug: string; label: string }[] = [
        { slug: "/", label: "Home" },
        { slug: "/massage", label: "Massage" },
        { slug: "/facials", label: "Facials" },
        { slug: "/booking", label: "Booking" },
    ];

    return (
        <StyledHeader>
            <h1 className="text-center">
                <Link className={`${oswald.className} font-extrabold uppercase text-2xl`} href="/">
                    Kim Legler L.M.T. / C.E.
                </Link>
            </h1>

            <StyledLinks>
                {links.map(({ slug, label }) => (
                    <Link
                        className={`px-2 py-0  ${
                            activeSegment === slug ? "text-gray-900" : "text-gray-500"
                        }`}
                        href={slug}
                        key={slug}
                        style={{
                            borderBottom:
                                activeSegment === slug ? "2px solid gold" : "2px solid transparent",
                        }}
                    >
                        {label}
                    </Link>
                ))}
            </StyledLinks>
        </StyledHeader>
    );
}

export { Header };
