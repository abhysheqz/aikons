import React from "react";
const Knives: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.494 10.5 3.108-3.109a2.59 2.59 0 0 0 2.154-.695 2.403 2.403 0 0 0 0-3.476 2.6 2.6 0 0 0-3.59 0L12.5 7.739"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.5 12 1.425-1.455a2.67 2.67 0 0 0 2.298-.782c1.015-1.036 1.012-2.704.13-3.763"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 15.5v6H3v-6L11.5 7l7 7-4.5 4.5"
      />
    </svg>
  );
};
export default Knives;
