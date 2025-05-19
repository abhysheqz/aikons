import React from "react";
const Hourglass: React.FC<
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
        d="M5 2v3.333C5 9.015 8.134 12 12 12s7-2.985 7-6.667V2M19 22v-3.333C19 14.985 15.866 12 12 12s-7 2.985-7 6.667V22M4 2h16m0 20H4"
      />
    </svg>
  );
};
export default Hourglass;
