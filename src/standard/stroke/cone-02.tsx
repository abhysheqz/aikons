import React from "react";
const Cone_02: React.FC<
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
        d="M12 19h3m0 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.411 12.778a10.55 10.55 0 0 0 15.177 0 11 11 0 0 0 2.11-3.06c.192-.416.04-.902-.336-1.165l-8.788-6.152a1 1 0 0 0-1.147 0L2.638 8.553c-.375.263-.528.75-.336 1.165a11 11 0 0 0 2.11 3.06Z"
      />
      <path fill="currentColor" d="M11.25 6a.75.75 0 0 0 1.5 0zm0-4v4h1.5V2z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12h.009m-.01-3h.01"
      />
    </svg>
  );
};
export default Cone_02;
