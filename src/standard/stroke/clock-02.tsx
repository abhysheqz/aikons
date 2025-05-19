import React from "react";
const Clock_02: React.FC<
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
        d="M5 8.498H2.5C4.3 3.75 9.503.998 14.54 2.343c5.364 1.432 8.55 6.916 7.117 12.249-1.434 5.332-6.945 8.494-12.31 7.061A10.04 10.04 0 0 1 2 13.483"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7.998v4l2 2"
      />
    </svg>
  );
};
export default Clock_02;
