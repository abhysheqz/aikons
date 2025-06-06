import React from "react";
const CarouselVertical: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 9a2 2 0 0 1 2-2h11.998a2 2 0 0 1 2 2.002l-.007 6a2 2 0 0 1-2 1.998H6a2 2 0 0 1-2-2zM17 22l-.447-.894A2 2 0 0 0 14.763 20H9.237a2 2 0 0 0-1.789 1.106L7 22M17 2l-.447.894A2 2 0 0 1 14.763 4H9.237a2 2 0 0 1-1.789-1.106L7 2"
      />
    </svg>
  );
};
export default CarouselVertical;
