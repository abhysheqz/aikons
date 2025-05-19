import React from "react";
const PointingLeft_04: React.FC<
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
        strokeWidth={1.5}
        d="M15.53 9.916H11m0 0H4.75a1.75 1.75 0 1 0 0 3.5H10V19a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-8.5l-3.858-2.513c-1.327-.871-1.941-.97-2.612-.986a3 3 0 0 0-.896.115c-.645.184-1.19.66-2.278 1.614zM8 4.5H2.672M4.5 2 2 4.5 4.5 7"
      />
    </svg>
  );
};
export default PointingLeft_04;
