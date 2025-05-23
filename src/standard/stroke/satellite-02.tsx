import React from "react";
const Satellite_02: React.FC<
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
        d="M16.201 7.799a4.1 4.1 0 0 0 5.799 0L16.201 2a4.1 4.1 0 0 0 0 5.799M16 8l-1.5 1.5M15.293 11.125l-2.418-2.418a1 1 0 0 0-1.414 0l-4.667 4.667a2.71 2.71 0 1 0 3.832 3.832l4.667-4.667a1 1 0 0 0 0-1.414M2.707 5.293l2.586-2.586a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L6.707 9.293a1 1 0 0 1-1.414 0L2.707 6.707a1 1 0 0 1 0-1.414M14.707 17.293l2.586-2.586a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414M16 16l-2-2m-4-4L8 8"
      />
    </svg>
  );
};
export default Satellite_02;
