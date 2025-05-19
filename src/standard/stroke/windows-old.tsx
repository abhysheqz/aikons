import React from "react";
const WindowsOld: React.FC<
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
        d="m18.671 3.028-14 2.333A2 2 0 0 0 3 7.334v9.333a2 2 0 0 0 1.671 1.973l14 2.333A2 2 0 0 0 21 19V5a2 2 0 0 0-2.329-1.972M11 4.5v15M3 12h18"
      />
    </svg>
  );
};
export default WindowsOld;
