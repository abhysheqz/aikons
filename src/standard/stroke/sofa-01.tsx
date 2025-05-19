import React from "react";
const Sofa_01: React.FC<
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
        d="M6 17v3m12-3v3M4 9V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 9a2 2 0 0 0-1 3.732V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.268A2 2 0 0 0 20 9a2 2 0 0 0-2 2v2.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-2-2"
      />
    </svg>
  );
};
export default Sofa_01;
