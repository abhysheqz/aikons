import React from "react";
const FlipTop: React.FC<
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
        d="M21.005 16.993v-2m-18.003 2v-2m18.003 3.999v2.998h-3.002m-12 0H3.002l.016-2.998m12.985 2.998h-3m-2 0h-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.002 2.094a.1.1 0 0 1 .1-.1h17.803a.1.1 0 0 1 .1.1v9.903H3.002z"
      />
    </svg>
  );
};
export default FlipTop;
