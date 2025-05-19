import React from "react";
const CircleArrowReload_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m15.33-2.93-2.5-3.046-1.16.952 1.495 1.82H7.25V12h1.5v-1.704H16a.75.75 0 0 0 .58-1.226M15.25 12v1.705H8a.75.75 0 0 0-.58 1.226l2.5 3.045 1.16-.951-1.494-1.82h7.163L16.75 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowReload_01;
