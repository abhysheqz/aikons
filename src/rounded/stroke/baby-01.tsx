import React from "react";
const Baby_01: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 16c-.573.632-1.26 1-2 1s-1.427-.368-2-1M9 11.5c-.286-.316-.63-.5-1-.5s-.714.184-1 .5M17 11.5c-.286-.316-.63-.5-1-.5s-.714.184-1 .5M12 2a3 3 0 1 0 2 5.236"
      />
    </svg>
  );
};
export default Baby_01;
