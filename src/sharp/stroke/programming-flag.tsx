import React from "react";
const ProgrammingFlag: React.FC<
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
        d="M3.5 15h17V3h-17zm0 0v6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.997 7 2 2-2 2M9.002 7.002l-2 2 2 2m4-4.5-2.005 4.997"
      />
    </svg>
  );
};
export default ProgrammingFlag;
