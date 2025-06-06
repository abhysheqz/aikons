import React from "react";
const Pin: React.FC<
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
        d="m3 21 5.5-5.5M13.363 7.396l2.346-3.91a.92.92 0 0 1 .857-.461c2.499.22 4.19 1.91 4.41 4.41.03.35-.16.676-.461.856l-3.91 2.346a1 1 0 0 0-.467 1.054l.282 1.408a6 6 0 0 1-1.368 5.128l-.848.969a1 1 0 0 1-1.46.048l-7.989-7.989a1 1 0 0 1 .049-1.459l.965-.846a6 6 0 0 1 5.13-1.37l1.41.282a1 1 0 0 0 1.054-.466"
      />
    </svg>
  );
};
export default Pin;
