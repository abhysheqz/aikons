import React from "react";
const Steering: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m0 8c-.37 0-1.436.013-3.425.765-1.016.385-2.209.126-3.112-.255a.75.75 0 0 0-1.023.526 7.8 7.8 0 0 0-.061 3.128.75.75 0 0 0 .59.599c1.004.201 2.167.58 3.086 1.318.89.715 1.594 1.798 1.667 3.533a.75.75 0 0 0 .586.7 7.8 7.8 0 0 0 3.384 0 .75.75 0 0 0 .586-.7c.073-1.735.776-2.818 1.667-3.533.919-.739 2.082-1.117 3.086-1.318a.75.75 0 0 0 .59-.6 7.8 7.8 0 0 0-.061-3.127.75.75 0 0 0-1.023-.526c-.903.38-2.095.64-3.112.255-1.99-.752-3.055-.765-3.425-.765"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.508 13c0 .828-.67 1.5-1.495 1.5h-.01a1.5 1.5 0 0 1-1.495-1.5c0-.828.67-1.5 1.496-1.5h.008c.826 0 1.496.672 1.496 1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Steering;
