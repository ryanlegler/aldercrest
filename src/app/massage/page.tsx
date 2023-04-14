import Image from "next/image";
import { StyledWrapper, StyledTextWrap, StyledImageWrap, StyledButton } from "../styledComponents";
import { headers } from "next/headers";
import { Header } from "../(components)/header";

export default function Home() {
    const headersList = headers();
    const url = headersList.get("next-url") || "/";

    return (
        <>
            <Header activeSegment={url} />
            <StyledWrapper>
                <StyledTextWrap>
                    <h2 className="font-bold">Massage</h2>
                    <ol>
                        <li className="flex justify-between">
                            <span>30 min massage </span>
                            <span className="font-bold"> $50</span>
                        </li>
                        <li className="flex justify-between">
                            <span>45 Min Massage </span>
                            <span className="font-bold"> $70</span>
                        </li>
                        <li className="flex justify-between">
                            <span>60 min massage </span>
                            <span className="font-bold"> $85</span>
                        </li>
                        <li className="flex justify-between">
                            <span>90 min massage </span>
                            <span className="font-bold"> $125</span>
                        </li>
                    </ol>
                    <StyledButton href="/booking/">Booking</StyledButton>
                </StyledTextWrap>
                <StyledImageWrap>
                    <Image
                        src="/images/home.jpg"
                        alt="Aldercrest Logo - Massage"
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
