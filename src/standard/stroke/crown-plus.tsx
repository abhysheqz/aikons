import React from "react";
const CrownPlus: React.FC<
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
        d="M18.5 2v5M21 4.5h-5M5 22h14M19 19H5l-2.949-8.423a.97.97 0 0 1 .241-1.007 1.01 1.01 0 0 1 1.26-.123L7.5 12l3.741-6.566A.88.88 0 0 1 12 5c.314 0 .603.166.759.434L16.5 12l3.949-2.553c.395-.26.922-.208 1.259.123.267.264.36.653.24 1.007z"
      />
    </svg>
  );
};
export default CrownPlus;
