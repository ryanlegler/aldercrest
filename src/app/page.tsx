import Image from "next/image";

import { Header } from "./(components)/header";
import { StyledWrapper, StyledTextWrap, StyledImageWrap } from "./styledComponents";
import { headers } from "next/headers";

export default function Home() {
    const headersList = headers();
    const url = headersList.get("next-url") || "";
    return (
        <>
            <Header activeSegment={url} />
            <StyledWrapper>
                <StyledTextWrap>
                    <p>
                        I am a massage therapist and a holistic esthetician in Milwaukie Oregon.
                        Since 2005 I have been specializing in Swedish, deep tissue, trigger point,
                        and prenatal massage.
                    </p>
                    <p>
                        In 2008, I became a certified Dr. Hauschka esthetician and currently offer
                        holistic facials utilizing the Evan Healy product line.
                    </p>
                    <p>
                        I enjoy the work that I do and the joy it brings to my clients. I look
                        forward to working with you.
                    </p>
                </StyledTextWrap>
                <StyledImageWrap>
                    <Image
                        className="object-center"
                        src="/images/aldercrest.svg"
                        alt="Aldercrest Logo"
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                        priority
                    />
                </StyledImageWrap>
            </StyledWrapper>
        </>
    );
}
