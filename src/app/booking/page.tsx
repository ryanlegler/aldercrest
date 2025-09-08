import Image from "next/image";
import { Header } from "../(components)/header";
import { StyledWrapper, StyledTextWrap, StyledImageWrap, StyledButton } from "../styledComponents";

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
                        <p className="font-bold text-orange-500">
                            20% off all treatments for the month of September.
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
                            className="text-gray-500 hover:text-gray-800 underline"
                            href="mailto:contact@aldercrest.net?subject=Treatment Booking Request"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            contact@aldercrest.net
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
                        src="/images/kim_booking_v1.1.jpg"
                        alt="Aldercrest Logo - Booking"
                        fill
                        style={{
                            objectFit: "contain",
                            objectPosition: "center",
                        }}
                        priority
                    />
                </StyledImageWrap>
            </StyledWrapper>
        </>
    );
}
