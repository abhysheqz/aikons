import React from "react";
const CursorHold_01: React.FC<
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
        d="M9 4.246a6.25 6.25 0 0 0 8.452 7.505l2.298 2.042-6.199 1.33 2.65 5.67-3.974 1.957-2.79-5.898L4.25 20.25l1.375-19z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m-.4 6.212L17.26 4.8 16.2 3.74 13.54 6.4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorHold_01;
