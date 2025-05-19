import React from "react";
const HandPrayer: React.FC<
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
        d="M15.5 15 14 10.5c-1.657 0-2 1.343-2 3V15M8.5 15l1.5-4.5c1.657 0 2 1.343 2 3V15"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m22 22-3.485-1.992L15.007 20c-2.004 0-3.006-1.664-3.006-3.262V3.197a1.2 1.2 0 0 1 2.31-.453L19.015 14l2.985 1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.002 22 3.486-1.992L8.995 20c2.005 0 3.007-1.664 3.007-3.262V3.197a1.2 1.2 0 0 0-2.31-.453L4.987 14l-2.984 1"
      />
    </svg>
  );
};
export default HandPrayer;
