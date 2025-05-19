import React from "react";
const CoinsDollar: React.FC<
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
        d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM3.157 11A7.111 7.111 0 0 0 13 20.843"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.771 8.205c-.216-.912-1.316-1.735-2.637-1.12-1.321.617-1.531 2.598.467 2.808.903.095 1.492-.11 2.03.471.54.581.64 2.198-.738 2.634s-2.742-.245-2.891-1.212m1.984-5.782v.87m0 6.258v.872"
      />
    </svg>
  );
};
export default CoinsDollar;
