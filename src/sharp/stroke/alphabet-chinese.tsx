import React from "react";
const AlphabetChinese: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.03 13.992h10.96"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.998 7.965V6.026h8.045m5.959 1.94v-1.94h-5.959m0 0c-.181-.755-.893-2.407-2.027-3.026M8.51 8.998h6.96a.01.01 0 0 1 .006.017l-3.001 2.97v5.595c.041 1.14-.24 3.342-2.55 3.42"
      />
    </svg>
  );
};
export default AlphabetChinese;
