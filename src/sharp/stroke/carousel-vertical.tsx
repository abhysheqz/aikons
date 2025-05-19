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
        d="M3 7h18l-.012 10H3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17 22-1-2H8l-1 2M17 2l-1 2H8L7 2"
      />
    </svg>
  );
};
export default CarouselVertical;
