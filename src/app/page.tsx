import Image from "next/image";

import { Header } from "./(components)/header";
import { StyledWrapper, StyledTextWrap, StyledImageWrap, StyledButton } from "./styledComponents";

export default function Home() {
    return (
        <>
            <Header activeSegment={"/"} />
            <StyledWrapper>
                <StyledTextWrap>
                    <p>
                        I am a massage therapist and a holistic esthetician in Milwaukie Oregon.
                        Since 2005 I have been specializing in Swedish, deep tissue, trigger point,
                        and prenatal massage.
                    </p>
                    <p>
                        In 2010, I became a certified Dr. Hauschka esthetician and currently offer
                        holistic facials utilizing the Evan Healy product line.
                    </p>
                    <p>
                        I enjoy the work that I do and the joy it brings to my clients. I look
                        forward to working with you.
                    </p>
                    <StyledButton
                        href="https://app.squareup.com/gift/NHV340GJS0726/order"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Purchase a Gift Card
                    </StyledButton>
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
