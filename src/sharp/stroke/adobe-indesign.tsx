import React from "react";
const AdobeIndesign: React.FC<
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
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 8v8.258"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.986 11.125h-3.9a.1.1 0 0 0-.1.1v4.933a.1.1 0 0 0 .1.1h3.9zm0 0V7.258"
      />
    </svg>
  );
};
export default AdobeIndesign;
