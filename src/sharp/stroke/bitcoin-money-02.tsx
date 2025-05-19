import React from "react";
const BitcoinMoney_02: React.FC<
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
        d="M10.438 14.667V9.333m1.562 0V8m0 8v-1.333M10.438 12h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5M19 11.142a14 14 0 0 0-1-.107m-12 1.93q-.512-.035-1-.106"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 4.5c-1.332.622-3.083 1-5 1-1.066 0-2.5 0-5-1v15c2.5 1 3.934 1 5 1 1.917 0 3.668-.378 5-1s3.083-1 5-1c3 0 5 1 5 1v-15s-2-1-5-1c-1.917 0-3.668.378-5 1Z"
      />
    </svg>
  );
};
export default BitcoinMoney_02;
