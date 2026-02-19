import { Truck } from "lucide-react";
import { StyledBanner, StyledBannerContent } from "./styledComponents";

function Banner() {
    return (
        <StyledBanner>
            <StyledBannerContent>
                <Truck className="h-5 w-5 shrink-0" aria-hidden />
                <p className="font-semibold">
                    We&apos;re moving to Oregon City! We will be closed until March 17, at which point we
                    will reopen at our new location.
                </p>
            </StyledBannerContent>
        </StyledBanner>
    );
}

export { Banner };
