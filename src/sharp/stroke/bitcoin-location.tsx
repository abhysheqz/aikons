import React from "react";
const BitcoinLocation: React.FC<
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
        d="M10.438 12.167V6.833m1.562 0V5.5m0 8v-1.333M10.438 9.5h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 9.5c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 18.268c-1.245.396-2 .916-2 1.486C4 20.994 7.582 22 12 22s8-1.006 8-2.246c0-.57-.755-1.09-2-1.486"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.5 9.65C19.5 15.6 12 19 12 19s-7.5-3.4-7.5-9.35C4.5 5.425 7.858 2 12 2s7.5 3.425 7.5 7.65Z"
      />
    </svg>
  );
};
export default BitcoinLocation;
