import React from "react";
const Quran_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.5 12.5 8-6-2.353-3L12.5 8 6.382 3.5 4.5 6.5zM22.5 8.5l-16 12V16m-4-7.5 16 12V16"
      />
    </svg>
  );
};
export default Quran_01;
