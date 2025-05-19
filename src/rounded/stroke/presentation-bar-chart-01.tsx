import React from "react";
const PresentationBarChart_01: React.FC<
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
        d="M12 18v4M10 18l-5 4M14 18l5 4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 12c0 2.828 0 4.243.879 5.121C4.257 18 5.672 18 8.5 18h7c2.828 0 4.243 0 5.121-.879.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C19.743 2 18.328 2 15.5 2h-7c-2.828 0-4.243 0-5.121.879C2.5 3.757 2.5 5.172 2.5 8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 13v-3m4 3V7m4 6v-2"
      />
    </svg>
  );
};
export default PresentationBarChart_01;
