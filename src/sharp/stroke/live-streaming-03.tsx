import React from "react";
const LiveStreaming_03: React.FC<
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
        d="M2 4.5h15v15H2zM17 13v-2l4-4h1v10h-1z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3v-3"
      />
    </svg>
  );
};
export default LiveStreaming_03;
