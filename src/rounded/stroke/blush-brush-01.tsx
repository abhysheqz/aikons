import React from "react";
const BlushBrush_01: React.FC<
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
        d="m8.065 11.032-5.181 1.791c-2.448.915.851 5.134 1.946 6.224s5.502 4.536 6.421 2.101l1.743-5.212m-9.76.554 2.702-1.378m1.703 5.386 1.254-2.443M12.626 8.25l1.003-.998c.394-.392 1.082-.319 1.476.074l1.564 1.556a1 1 0 0 1 0 1.42l-1.002.997a2 2 0 0 0-.562 1.082l-.495 2.877c-.138.803-1.13 1.117-1.709.54l-4.538-4.787c-.58-.576-.474-1.5.333-1.637l2.892-.492c.412-.07.743-.339 1.038-.633M16.945 9.002l4.582-4.742c1.357-1.35-.508-3.1-1.808-1.807l-4.794 4.54"
      />
    </svg>
  );
};
export default BlushBrush_01;
