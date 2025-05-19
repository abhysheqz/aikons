import React from "react";
const Png_02: React.FC<
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
        d="M19 22H3V2h9l7 7v2m-7-8.5V9h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7 19v-2m0 0v-3h1.5a1.5 1.5 0 0 1 0 3zm14-2v-1h-3v5h3v-2h-1m-8 2v-5h.204l3.104 5h.192v-5"
      />
    </svg>
  );
};
export default Png_02;
