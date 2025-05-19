import React from "react";
const Doctor_03: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 22v-7.5S18.688 13 17 13h-3l-2 2-2-2H7c-1.688 0-3 1.5-3 1.5V22M15.5 6.5v-1a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 1 0 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 16v3m1.5-1.5h-3"
      />
    </svg>
  );
};
export default Doctor_03;
