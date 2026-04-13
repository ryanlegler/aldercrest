import { DoorOpen } from "lucide-react";
import { StyledBanner, StyledBannerContent } from "./styledComponents";

function Banner() {
    return (
        <StyledBanner>
            <StyledBannerContent>
                <DoorOpen className="h-5 w-5 shrink-0" aria-hidden />
                <p className="font-semibold">Now open in our new location in Oregon City!</p>
            </StyledBannerContent>
        </StyledBanner>
    );
}

export { Banner };
