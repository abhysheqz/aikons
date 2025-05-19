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
        d="M2 13.03h20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.989 17.042H18m-5 0h.011"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.99 21H5a3 3 0 0 1-3-3v-5l2.357-7.862A3 3 0 0 1 7.231 3h9.528a3 3 0 0 1 2.874 2.138L21.99 13v5a3 3 0 0 1-3 3"
      />
    </svg>
  );
};
export default HardDrive;
