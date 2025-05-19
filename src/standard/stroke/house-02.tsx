import React from "react";
const House_02: React.FC<
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
        d="m3 10 2.48-5.788A2 2 0 0 1 7.32 3h9.362a2 2 0 0 1 1.838 1.212L21 10M3 10v11m18-11v11M2 21h20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.009 11.55H12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 21v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5M2 9.998h6.13a1 1 0 0 0 .651-.242l2.563-2.2a1 1 0 0 1 1.3-.002L15.22 9.75a1 1 0 0 0 .647.238l6.133.01"
      />
    </svg>
  );
};
export default House_02;
