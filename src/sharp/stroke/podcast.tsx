import React from "react";
const Podcast: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M4.516 17a9 9 0 1 1 14.969 0"
      />
      <rect
        width={6}
        height={8}
        x={9}
        y={8}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        rx={3}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 16v4M14 21h-4v-.5l2-1.5 2 1.5z"
      />
    </svg>
  );
};
export default Podcast;
