import React from "react";
const EaseIn: React.FC<
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
        fillRule="evenodd"
        d="M21.4 3.084a1 1 0 0 1 .516 1.317L21 4l.916.4-.002.006-.005.01-.017.04-.065.142a40.949 40.949 0 0 1-1.217 2.385 43 43 0 0 1-3.697 5.633C13.749 16.666 8.989 21 3 21a1 1 0 1 1 0-2c5.01 0 9.251-3.666 12.337-7.616a41 41 0 0 0 3.522-5.367A39 39 0 0 0 20.01 3.76l.057-.124.014-.03.003-.007v-.001"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EaseIn;
