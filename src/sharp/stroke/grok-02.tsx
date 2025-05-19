import React from "react";
const Grok_02: React.FC<
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
        strokeWidth={1.5}
        d="M7 9H3l9 13h4zM6.15 17.502 3 22h4l1.138-1.625zM12.9 13.57 21 2h-4l-6.088 8.698zM18 10.21V22h3V5.924z"
      />
    </svg>
  );
};
export default Grok_02;
