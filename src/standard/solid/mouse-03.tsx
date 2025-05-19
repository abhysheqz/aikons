import React from "react";
const Mouse_03: React.FC<
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
        d="M12 4.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25c-1.041 0-2.134.059-3.12.135-2.422.188-4.376 2.005-4.697 4.424C3.957 7.516 3.75 9.703 3.75 12c0 2.388.224 4.657.46 6.391.314 2.301 2.128 4.073 4.468 4.242.94.068 2.058.117 3.322.117s2.381-.05 3.322-.117c2.34-.169 4.154-1.941 4.468-4.242.236-1.734.46-4.003.46-6.391 0-2.297-.207-4.484-.433-6.19-.32-2.42-2.275-4.237-4.697-4.425A41 41 0 0 0 12 1.25M8.996 2.88c.963-.074 2.015-.13 3.004-.13.99 0 2.04.056 3.004.13 1.727.135 3.1 1.42 3.326 3.127.161 1.217.312 2.679.38 4.243H5.29c.068-1.564.219-3.026.38-4.243C5.896 4.3 7.27 3.015 8.996 2.88"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_03;
