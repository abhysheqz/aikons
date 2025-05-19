import React from "react";
const Presentation_04: React.FC<
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
        d="M21.5 14.5v-8a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18v4M12 2v1.5M7 22l5-3 5 3"
      />
    </svg>
  );
};
export default Presentation_04;
