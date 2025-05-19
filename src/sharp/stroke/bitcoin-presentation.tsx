import React from "react";
const BitcoinPresentation: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 2H2v3h20z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5v14h18V5"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M13.5 10h3m-3 4h5" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.938 14.667V9.333m1.562 0V8m0 8v-1.333M6.938 12h3.125m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.937 1H6M10.063 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H6"
      />
    </svg>
  );
};
export default BitcoinPresentation;
