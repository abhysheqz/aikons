import React from "react";
const House_01: React.FC<
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
        d="M14 2.001 1 7.998M12 6.999l11 4.997M18 9.497V7M6 10.997h3m-3 3.998h3M15 13.995h3M16.5 21.99v-3.997"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.997 21.942 11.034.056V11.5M3.034 6.963v14.979h9.058V3.007"
      />
    </svg>
  );
};
export default House_01;
