import React from "react";
const CarouselHorizontal: React.FC<
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
        d="M9 21a2 2 0 0 1-2-2V5.003a2 2 0 0 1 2.003-2l6 .008a2 2 0 0 1 1.997 2V19a2 2 0 0 1-2 2zM22 7l-.894.447A2 2 0 0 0 20 9.237v5.527a2 2 0 0 0 1.106 1.789L22 17M2 7l.894.447A2 2 0 0 1 4 9.237v5.527a2 2 0 0 1-1.106 1.789L2 17"
      />
    </svg>
  );
};
export default CarouselHorizontal;
