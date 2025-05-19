import React from "react";
const Satellite_01: React.FC<
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
        d="M20.307 15.331c-3.521 3.521-9.173 3.577-12.694.056s-3.465-9.173.056-12.694m12.638 12.638c1.677-1.677.207-5.865-3.283-9.355S9.346 1.016 7.67 2.693m12.638 12.638c-1.677 1.677-5.866.207-9.355-3.282M7.669 2.693C5.992 4.37 7.462 8.56 10.952 12.05m0 0L14.5 8.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.488 15 3 22h14.5l-1.895-4"
      />
    </svg>
  );
};
export default Satellite_01;
