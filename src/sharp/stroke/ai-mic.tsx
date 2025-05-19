import React from "react";
const AiMic: React.FC<
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
        d="M17 11a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5M20 11a8 8 0 0 1-8 8m0 0a8 8 0 0 1-8-8m8 8v3M16.85 2h.3l.66 2.19 2.19.66v.3l-2.19.66L17.15 8h-.3l-.66-2.19L14 5.15v-.3l2.19-.66z"
      />
    </svg>
  );
};
export default AiMic;
