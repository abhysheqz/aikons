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
        d="M16.201 7.799a4.1 4.1 0 0 0 5.799 0L16.201 2a4.1 4.1 0 0 0 0 5.799M16 8l-1.5 1.5M16 11.832 12.168 8l-5.374 5.374a2.71 2.71 0 1 0 3.832 3.832zM2 6l4-4 4 4-4 4zM14 18l4-4 4 4-4 4zM16 16l-2-2m-4-4L8 8"
      />
    </svg>
  );
};
export default Satellite_02;
