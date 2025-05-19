import React from "react";
const LicenseMaintenance: React.FC<
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
        d="M19.5 10V2h-17v20H11M7 7h8m-8 5h4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.5 20.773c1.767 0 3.2-1.465 3.2-3.273 0-1.807-1.433-3.273-3.2-3.273m0 6.546c-1.767 0-3.2-1.465-3.2-3.273 0-1.807 1.433-3.273 3.2-3.273m0 6.546V22m0-7.773V13m-2.909 2.715-1.09-.67m7.999 4.91-1.09-.67m-.001-3.57 1.09-.67m-7.999 4.91 1.09-.67"
      />
    </svg>
  );
};
export default LicenseMaintenance;
