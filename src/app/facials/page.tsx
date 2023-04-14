import Image from "next/image";
import { StyledWrapper, StyledTextWrap, StyledImageWrap, StyledButton } from "../styledComponents";
import { headers } from "next/headers";
import { Header } from "../(components)/header";
export default function Facials() {
    const headersList = headers();
    const url = headersList.get("next-url") || "/";
    return (
        <>
            <Header activeSegment={url} />
            <StyledWrapper>
                <StyledTextWrap>
                    <h2 className="font-bold">Facials</h2>
                    <ol>
                        <li className="flex justify-between">
                            <span>30 min holistic facial </span>
                            <span className="font-bold place-items-end"> $55</span>
                        </li>
                        <li className="flex justify-between">
                            <span>45 min holistic facial </span>
                            <span className="font-bold"> $75</span>
                        </li>
                        <li className="flex justify-between">
                            <span>60 min holistic facial </span>
                            <span className="font-bold"> $95</span>
                        </li>
                        <li className="flex justify-between">
                            <span>90 min holistic facial </span>
                            <span className="font-bold"> $140</span>
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
