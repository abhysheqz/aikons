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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M22 6.5A1.5 1.5 0 0 0 20.5 8v8a1.5 1.5 0 0 0 1.5 1.5v0M2 6.5A1.5 1.5 0 0 1 3.5 8v8A1.5 1.5 0 0 1 2 17.5v0"
      />
    </svg>
  );
};
export default CarouselHorizontal_02;
