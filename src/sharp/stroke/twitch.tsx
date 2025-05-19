import React from "react";
const Twitch: React.FC<
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
        d="M15.98 7.495v5m-4-5v5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.99 3.499H4.01a.01.01 0 0 0-.01.01v12.999q0 .009.01.01l3.012-.044v4.017c0 .009.01.013.017.007l3.975-3.98h5.974l3.013-3.003V3.51a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default Twitch;
