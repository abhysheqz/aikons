import React from "react";
const AiPhone_02: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M16 18v4H3V2h13v4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.25 6.75 18 9h-3m4.5-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM20.25 17.25 18 15h-3m4.5 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM20.25 12H12m7.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 19h.009"
      />
    </svg>
  );
};
export default AiPhone_02;
