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
        fill="currentColor"
        d="M20.663 6.25h2.087v11.5h-2.087l-4.413-4.965v-1.57z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 3.75H1.25v16.5h16.5zM9.5 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LiveStreaming_03;
