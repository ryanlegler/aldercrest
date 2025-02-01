import Image from "next/image";
import Link from "next/link";
import { Header } from "../(components)/header";
import { StyledWrapper, StyledTextWrap, StyledImageWrap, StyledButton } from "../styledComponents";

export default function Facials() {
    return (
        <>
            <Header activeSegment={"/facials"} />
            <StyledWrapper>
                <StyledTextWrap>
                    <h2 className="font-bold">Facials</h2>
                    <ol>
                        <li className="flex justify-between">
                            <span>30 min holistic facial </span>
                            <span className="font-bold place-items-end"> $95</span>
                        </li>
                        <li className="flex justify-between">
                            <span>45 min holistic facial </span>
                            <span className="font-bold"> $115</span>
                        </li>
                        <li className="flex justify-between">
                            <span>60 min holistic facial </span>
                            <span className="font-bold"> $135</span>
                        </li>
                        <li className="flex justify-between">
                            <span>90 min holistic facial </span>
                            <span className="font-bold"> $180</span>
                        </li>
                    </ol>
                    <StyledButton href="/booking/" className="flex items-center gap-2">
                        Booking
                    </StyledButton>
                </StyledTextWrap>
                <StyledImageWrap>
                    <Image
                        src="/images/facials.jpg"
                        alt="Facials Logo"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                        priority
                    />
                </StyledImageWrap>
            </StyledWrapper>
        </>
    );
}

{
    /* <span className="text-xl">→</span> */
}
