import tw from "tailwind-styled-components";

export const StyledBanner = tw.div`
    w-full
    bg-yellow-100
    border-b
    border-yellow-300
    py-3
    px-4
`;

export const StyledBannerContent = tw.div`
    flex
    justify-center
    items-center
    gap-2
    text-center
    text-sm
    sm:text-base
    text-gray-800
`;
