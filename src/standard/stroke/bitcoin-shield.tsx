import React from "react";
const BitcoinShield: React.FC<
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
        strokeWidth={1.5}
        d="M21 11.051V6.123c0-.775-.585-1.418-1.345-1.55-3.06-.532-5.6-1.715-6.84-2.372a1.75 1.75 0 0 0-1.63 0c-1.24.657-3.78 1.84-6.84 2.372C3.585 4.705 3 5.348 3 6.123v4.928c0 6.429 6.538 9.935 8.469 10.83.34.158.721.158 1.062 0C14.462 20.986 21 17.48 21 11.051Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 9h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 1 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3V9m0 3v3m-1 0h1m0-6H12m-1.5 6H12m0-6V8m0 7v1"
      />
    </svg>
  );
};
export default BitcoinShield;
