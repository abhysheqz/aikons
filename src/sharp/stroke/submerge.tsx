import React from "react";
const Submerge: React.FC<
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
      <circle
        cx={12}
        cy={14}
        r={4}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 2v1.5M7 5v1.5M7 8v1.5M17 2v1.5M17 5v1.5M17 8v1.5M12 2v1.5M12 5v1.5M2 12v10h20V12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 14.872c2.264 1.914 4.174.857 6.022-.039 1.575-.764 3.104-1.411 4.768 0 3.257 2.714 6.12-.08 9.21-.635"
      />
    </svg>
  );
};
export default Submerge;
