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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.008 3C9.59 7 7.07 14 11.5 21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5.32C6.706 6.198 15.177 6.637 21 4M16.004 10c0 4-3.657 10.044-9.004 10-2.165-.018-2.994-1.106-3-2.5-.01-2.623 3.2-6.326 8.046-6 6.247.421 9.987 5.326 3.747 9.5"
      />
    </svg>
  );
};
export default AlphabetJapanese;
