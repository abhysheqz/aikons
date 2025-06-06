import React from "react";
const HighHeels_01: React.FC<
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
        d="M18 18c-.968.667-2.31 1.867-1.936 4M6.5 5l9 2.5M4 7c2.96 2 3.947 4.5 1.973 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.517 16.739c-.782-1.126-.774-2.965-.466-5.67L16 4.009a.01.01 0 0 0-.008-.011L8 2 6.5 5C3.3 6.2 3 9 3 11l9 11h7.244c.97 0 1.756-.786 1.756-1.756 0-.745-.47-1.415-1.184-1.628-2.305-.686-3.487-.707-4.3-1.877"
      />
    </svg>
  );
};
export default HighHeels_01;
