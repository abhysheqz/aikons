import React from "react";
const Touch_10: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 21v-9.5a5.5 5.5 0 1 1 11 0V21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 13v-1a9 9 0 0 1 18 0v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 11.5a2.5 2.5 0 0 0-5 0v1.25c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25z"
      />
    </svg>
  );
};
export default Touch_10;
