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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.5 12.5 8.5-6-2.5-3-6 4.5L6 3.5l-2 3zM22.5 8.5l-16 12v-4.696M2.5 8.5l16 12v-4.696"
      />
    </svg>
  );
};
export default Quran_01;
