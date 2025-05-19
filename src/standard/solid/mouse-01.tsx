import React from "react";
const Mouse_01: React.FC<
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
        d="M12 1.25c-1.041 0-2.134.059-3.12.135-2.422.188-4.376 2.005-4.697 4.424C3.957 7.516 3.75 9.703 3.75 12c0 2.388.224 4.657.46 6.391.314 2.301 2.128 4.073 4.468 4.242.94.068 2.058.117 3.322.117s2.381-.05 3.322-.117c2.34-.169 4.154-1.941 4.468-4.242.236-1.734.46-4.003.46-6.391 0-2.297-.207-4.484-.433-6.19-.32-2.42-2.275-4.237-4.697-4.425A41 41 0 0 0 12 1.25m1 4.25a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_01;
