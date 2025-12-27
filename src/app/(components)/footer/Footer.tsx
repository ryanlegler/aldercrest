import Link from "next/link";
import { StyledFooter, StyledFooterContent } from "./styledComponents";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <StyledFooter>
            <StyledFooterContent>
                <Link href="/newsletter" className="text-xs text-gray-600 hover:text-gray-900">
                    Newsletter Signup
                </Link>
                <span className="text-xs text-gray-500">|</span>
                <span className="text-xs text-gray-500">
                    © {currentYear} Aldercrest Massage + Facials
                </span>
            </StyledFooterContent>
        </StyledFooter>
    );
}

export { Footer };
