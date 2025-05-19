import React from "react";
const HotPrice: React.FC<
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
        d="m9.5 17.5 5-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 13h.007m3.986 4H14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22c-4.2 0-8-3.22-8-8.2 0-2.497 1.485-5.11 4.5-8.3.073.499.384 1.385 1.5 2.5 1-1 2-2 2-6 5.33 4.55 8 8.48 8 11.8 0 4.98-3.8 8.2-8 8.2"
      />
    </svg>
  );
};
export default HotPrice;
