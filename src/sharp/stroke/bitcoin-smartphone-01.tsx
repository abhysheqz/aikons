import React from "react";
const BitcoinSmartphone_01: React.FC<
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
        strokeWidth={1.5}
        d="M17.75 6V2h-14v20h14v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.188 14.667V9.333m1.562 0V8m0 8v-1.333M16.188 12h3.125m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.937 1H15.25M19.313 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H15.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.75 19h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 5h3"
      />
    </svg>
  );
};
export default BitcoinSmartphone_01;
