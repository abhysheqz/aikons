import React from "react";
const Kettle: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 21h16v-4a8 8 0 1 0-16 0z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 9V8a2 2 0 1 1 4 0v1M18.5 17a2 2 0 0 0 2-2v-4h2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 11.5V9a6 6 0 0 0-12 0v2.5M2.5 17h10"
      />
    </svg>
  );
};
export default Kettle;
