import React from "react";
const Gitbook: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m5.684 13.142 6.842 3.04L22 11.658v2.794c0 .718-.415 1.38-1.083 1.73L12.5 20l-7.725-3.444C3.063 15.671 2 13.98 2 12.144m0 0c0-2.042 2.286-3.37 4.228-2.457L12.5 12.5 22 7.7v-.2L12.5 4 4.23 8.381C2.843 9.188 2 10.611 2 12.144Z"
      />
    </svg>
  );
};
export default Gitbook;
