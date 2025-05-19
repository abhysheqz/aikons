import React from "react";
const House_05: React.FC<
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
        d="M4 11h16v11H4z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 22v-3c0-.943 0-1.414-.293-1.707S13.443 17 12.5 17h-1c-.943 0-1.414 0-1.707.293S9.5 18.057 9.5 19v3M2 9.723c0-.578.27-1.041.817-1.224l8.113-2.711C11.79 5.5 12 5.025 12 4.186c0-.757-.124-2.269 1.064-2.184.28.02.62.285 1.298.814l7.077 5.519c.4.31.561.682.561 1.2 0 .943-.396 1.465-1.315 1.465H3.147C2.41 11 2 10.455 2 9.723Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 22h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 15h1M17 15h-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 7.5V3"
      />
    </svg>
  );
};
export default House_05;
