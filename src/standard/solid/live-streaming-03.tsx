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
        d="M20.234 6.733a1.44 1.44 0 0 1 2.516.957v8.62a1.44 1.44 0 0 1-2.516.957l-3.795-4.269a.75.75 0 0 1-.189-.498v-1a.75.75 0 0 1 .19-.498z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3.75A2.75 2.75 0 0 0 1.25 6.5v11A2.75 2.75 0 0 0 4 20.25h11a2.75 2.75 0 0 0 2.75-2.75v-11A2.75 2.75 0 0 0 15 3.75zM9.5 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LiveStreaming_03;
