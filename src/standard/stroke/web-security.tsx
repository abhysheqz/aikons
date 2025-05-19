import React from "react";
const WebSecurity: React.FC<
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
        d="M3 8h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 5h.009m3.982 0h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 16.5H8.5V22h7v-5.5H14m-4 0V15a2 2 0 1 1 4 0v1.5m-4 0h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 20.5h-.5a2 2 0 0 1-2-2V4.01a2 2 0 0 1 1.999-2l15-.009a2 2 0 0 1 2.001 2V18.5a2 2 0 0 1-2 2H19"
      />
    </svg>
  );
};
export default WebSecurity;
