import React from "react";
const TestTube_01: React.FC<
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
        strokeWidth={2}
        d="m10 17.002.009-.002"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 2h6M16 13.615c-.47 1.035-1.882 2.129-4.235.703C10.249 13.4 8.938 12.663 8 13.16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2v7l5.884 11.526c.345.666-.12 1.474-.846 1.474H4.962c-.727 0-1.19-.808-.846-1.474L10 9V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 19.002.009-.002"
      />
    </svg>
  );
};
export default TestTube_01;
