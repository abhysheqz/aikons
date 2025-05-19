import React from "react";
const Flowchart_01: React.FC<
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
        d="M16 6V2H8v4zM16 22v-4H8v4zM12 15l3-3-3-3-3 3z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.001 12h-5V4H8M15 12h5v8h-4M12 9V6m0 9v3"
      />
    </svg>
  );
};
export default Flowchart_01;
