import React from "react";
const CoinsPound: React.FC<
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
        d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 20.843A7.111 7.111 0 0 1 3.157 11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 7.569a1.89 1.89 0 0 0-2.407-1.494c-1.355.359-1.969 2.18-1.355 3.317C13.375 10.572 14 12 12.5 14h5m-7-3.81h5"
      />
    </svg>
  );
};
export default CoinsPound;
