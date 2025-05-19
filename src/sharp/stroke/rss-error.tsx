import React from "react";
const RssError: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 21H22v-8M3 11.5V6h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.982 21h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8"
      />
      <circle
        cx={17}
        cy={7}
        r={5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 9h.009M17 6.5V5"
      />
    </svg>
  );
};
export default RssError;
