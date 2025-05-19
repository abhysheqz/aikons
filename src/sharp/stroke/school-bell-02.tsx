import React from "react";
const SchoolBell_02: React.FC<
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
        d="M2.502 12.411 11.59 21.5l3.315-5.968A4.734 4.734 0 0 0 8.47 9.096zM19.502 16.5a4.9 4.9 0 0 1-1.427 2.657 5.2 5.2 0 0 1-2.573 1.343M7.502 4.5a5.2 5.2 0 0 0-2.596 1.404A5.2 5.2 0 0 0 3.502 8.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.002 8.802 4.389-5.426a2.303 2.303 0 1 1 3.235 3.235L15.199 11M6.912 19.914a2 2 0 1 1-2.828-2.828"
      />
    </svg>
  );
};
export default SchoolBell_02;
