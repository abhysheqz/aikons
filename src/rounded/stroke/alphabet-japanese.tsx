import React from "react";
const AlphabetJapanese: React.FC<
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
        d="M11.008 3C9.59 7 7.07 14 11.5 21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3 5.32C6.706 6.198 15.177 6.637 21 4M16.003 10c.495 3-3.463 9.5-8.85 9.956C.935 20.484 4.624 11 12.045 11.5c6.248.421 9.987 5.326 3.747 9.5"
      />
    </svg>
  );
};
export default AlphabetJapanese;
