import React from "react";
const TextSuperscript: React.FC<
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
        d="M12 21H6"
      />
      <path
        fill="currentColor"
        d="M9.75 3a.75.75 0 0 0-1.5 0zm-1.5 18a.75.75 0 0 0 1.5 0zm0-18v18h1.5V3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16 6c0-.628 0-.942-.08-1.217a2.04 2.04 0 0 0-1.166-1.29c-.265-.109-.566-.14-1.166-.2C12.17 3.146 10.388 3 9 3s-3.17.147-4.588.292c-.6.061-.9.092-1.166.2a2.04 2.04 0 0 0-1.165 1.29C2 5.059 2 5.373 2 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12h-2c-.471 0-.707 0-.854-.143C19 11.713 19 11.483 19 11.02v-.944c0-.796.176-.952 1-.968.777-.015 1.24-.07 1.56-.276.44-.281.44-.735.44-1.641 0-1.733-3-1.066-3-1.066"
      />
    </svg>
  );
};
export default TextSuperscript;
