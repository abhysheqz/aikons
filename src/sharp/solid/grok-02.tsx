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
        fill="currentColor"
        d="M7 9H3l9 13h4zM18 22h3V3.5l-3 4.286zM3 22h4l2.055-2.936-1.989-2.873zM9.995 12.008l1.989 2.873L21 2h-4z"
      />
    </svg>
  );
};
export default Grok_02;
