import React from "react";
const WhatsappBusiness: React.FC<
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
        d="M11.998 22.002C17.522 22.002 22 17.524 22 12S17.522 1.998 11.998 1.998 1.996 6.476 1.996 12c0 1.889.434 3.498 1.344 5.005L1.998 22l4.97-1.334c1.513.92 3.13 1.336 5.03 1.336Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h3.768M9 12V7.5h3.768C14 7.5 15 8.604 15 9.708S14 12 12.768 12M9 12v4.5h3.768C14 16.5 15 15.438 15 14.333S14 12 12.768 12"
      />
    </svg>
  );
};
export default WhatsappBusiness;
