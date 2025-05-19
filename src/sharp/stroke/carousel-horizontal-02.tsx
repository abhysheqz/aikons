import React from "react";
const CarouselHorizontal_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 4H6v16h12zM22 6.5h-1.5v11H22M2 6.5h1.5v11H2"
      />
    </svg>
  );
};
export default CarouselHorizontal_02;
