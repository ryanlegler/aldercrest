import Image from "next/image";
import { Header } from "../(components)/header";
import { StyledWrapper, StyledTextWrap, StyledImageWrap, StyledButton } from "../styledComponents";

const ADDRESS_LINE_1 = "15981 S Neibur Rd,";
const ADDRESS_LINE_2 = "Oregon City, OR 97045";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${ADDRESS_LINE_1} ${ADDRESS_LINE_2}`,
)}`;

export default function Booking() {
    return (
        <>
            <Header activeSegment={"/booking"} />
            <StyledWrapper>
                <StyledTextWrap>
                    {/* <h4 className="font-bold">Booking</h4> */}
                    <div className="flex flex-col gap-3">
                        <p>
                            Book your appointment now. Choose your treatment, date and time. You may
                            pay either during booking or at the time of appointment.
                        </p>

                        <StyledButton
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://aldercrest.setmore.com/"
                        >
                            Book Now
                        </StyledButton>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>
                            If you prefer, email the appointment date, time, and treatment details.
                        </p>
                        <a
                            className="inline-flex min-h-11 items-center text-gray-500 underline transition-colors hover:text-gray-800 sm:min-h-0"
                            href="mailto:contact@aldercrest.net?subject=Treatment Booking Request"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            contact@aldercrest.net
                        </a>
                        <a
                            className="block max-w-full min-h-11 py-2 text-left leading-snug text-gray-500 underline transition-colors hover:text-gray-800 sm:min-h-0 sm:py-0"
                            href={GOOGLE_MAPS_URL}
                            rel="noopener noreferrer"
                        >
                            {ADDRESS_LINE_1}
                            <br />
                            {ADDRESS_LINE_2}
                        </a>
                    </div>

                    <div className="flex gap-1 flex-col mt-auto border p-3">
                        <h3 className="font-bold flex items-center gap-1 leading-tight">
                            <span className="text-red-700">*</span>{" "}
                            <span className="font-light text-[12px]">NOTE</span>
                        </h3>
                        <p className="text-[11px] text-gray-500 leading-[1.3]">
                            For individuals with cat allergies, please be advised that this is a
                            residential business where cats reside on the property. However, they
                            are not permitted in the treatment room, and an air purifier is
                            installed in the area. Despite being well-maintained and cats being
                            restricted from the treatment room, there is still a risk of exposure to
                            cat dander.
                        </p>
                    </div>
                </StyledTextWrap>
                <StyledImageWrap>
                    <Image
                        src="/images/kim_booking_v1.3.webp"
                        alt="Aldercrest Logo - Booking"
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        priority
                    />
                </StyledImageWrap>
            </StyledWrapper>
        </>
    );
}
