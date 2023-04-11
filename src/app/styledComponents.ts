import tw from "tailwind-styled-components";
import Link from "next/link";

export const StyledWrapper = tw.main`
    flex
    gap-2
    flex-col
    sm:flex-row

`;
export const StyledTextWrap = tw.div`
    flex
    flex-col
    gap-7
    basis-4/12
    flex-grow-0
    order-1
    sm:pr-5
    sm:pl-0
    sm:pb-0
    p-5
`;

export const StyledImageWrap = tw.div`
    basis-8/12
    h-[70vh]
    min-h-[50vh]
    flex-grow
    relative
    order-0
    sm:order-2
`;

export const StyledButton = tw(Link)`
    border
    border-gray-500
    inline-block
    place-self-start
    py-2
    px-4
    transition-all
    hover:border-[gold]
`;
