import React from "react";
const Doc_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="m15.74 15.248 5.51.004V17.5h-1.5v-.75h-2.51v4.498l2.51-.002v-.749h1.5v2.248l-5.51.004zm-3.71 1.502c-.687 0-1.243.556-1.243 1.242v2.014a1.242 1.242 0 0 0 2.483 0v-2.014c0-.686-.555-1.242-1.24-1.242m-2.743 1.242a2.742 2.742 0 1 1 5.483 0v2.014a2.742 2.742 0 0 1-5.483 0zm-6.54-2.734h2.764a2.75 2.75 0 0 1 2.75 2.747l.002 1.987a2.75 2.75 0 0 1-2.75 2.753h-2.74zm1.506 1.5.015 4.488h1.245c.691 0 1.251-.561 1.25-1.252l-.002-1.987c-.001-.69-.56-1.248-1.25-1.248zM3.27 13.751l.002-12.5h10.11l7.389 7.38v5.12zm15.55-4.29-6.237-6.255v6.255z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Doc_01;
