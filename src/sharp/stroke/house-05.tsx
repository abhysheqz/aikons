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
        d="M14.5 22v-5h-5v5"
      />
      <path
        fill="currentColor"
        d="m12 2 .409-.629A.75.75 0 0 0 11.25 2zm-.001 4 .182.728.568-.142V6zm-10 5h-.75v.75h.75zM22 11v.75h.75V11zm0-2.5h.75a.75.75 0 0 0-.341-.629zm-20 0-.182-.728a.75.75 0 0 0-.568.728zm20 1.75H1.999v1.5H22zM2.182 9.228l9.999-2.5-.364-1.456-9.999 2.5zm9.41-6.6 10 6.5.817-1.257-10-6.5zM1.25 8.5 1.249 11h1.5V8.5zm20 0V11h1.5V8.5zM12.749 6l.001-4h-1.5l-.001 4z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 22h20M6.5 15h2M17.5 15h-2M5 7.5V3"
      />
    </svg>
  );
};
export default House_05;
