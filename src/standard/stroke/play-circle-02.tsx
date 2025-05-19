import React from "react";
const PlayCircle_02: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        fill="currentColor"
        d="m15.453 11.073-4.328-2.43c-.724-.407-1.625.106-1.625.926v4.862c0 .82.9 1.334 1.625.927l4.328-2.431c.73-.41.73-1.444 0-1.854"
      />
    </svg>
  );
};
export default PlayCircle_02;
