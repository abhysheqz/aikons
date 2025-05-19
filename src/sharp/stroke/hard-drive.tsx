import React from "react";
const HardDrive: React.FC<
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
        d="M2 12.99h20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.989 17.002H18m-5 0h.011"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m4.94 3.07-2.924 9.902v8.03h19.987v-7.948L19.038 3.07a.1.1 0 0 0-.096-.072H5.035a.1.1 0 0 0-.095.072Z"
      />
    </svg>
  );
};
export default HardDrive;
