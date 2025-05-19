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
        d="M7 21V3l10 .012V21z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m22 7-2 1v8l2 1M2 7l2 1v8l-2 1"
      />
    </svg>
  );
};
export default CarouselHorizontal;
