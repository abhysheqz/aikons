import React from "react";
const Bedug_01: React.FC<
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
        d="M5 16c1.105 0 2-3.134 2-7s-.895-7-2-7-2 3.134-2 7 .895 7 2 7Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 2 11.11 1.587C19.113 4.017 21 5.737 21 9c0 2.022-.935 4.38-3 5.051M5 16l9.094-1.3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.98 2.438c.68.886 1.096 4.125 1.028 7.098-.061 2.66-.519 5.023-1.004 5.966"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 15.5 16 22m-8 0 10-12"
      />
    </svg>
  );
};
export default Bedug_01;
