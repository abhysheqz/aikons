import React from "react";
const CoinsBitcoin: React.FC<
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
        d="M3.1 11a7.179 7.179 0 0 0 9.9 9.9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 10h3.5M12 10V6.5h2M12 10v3.5h2m1.5-3.5c.828 0 1.5-.784 1.5-1.75s-.672-1.75-1.5-1.75H14m1.5 3.5c.828 0 1.5.784 1.5 1.75s-.672 1.75-1.5 1.75H14m0 0v1m0-8v-1"
      />
    </svg>
  );
};
export default CoinsBitcoin;
