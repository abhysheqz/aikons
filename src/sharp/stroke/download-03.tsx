import React from "react";
const Download_03: React.FC<
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
        d="m18 9 4 2-4 10H6L2.003 11 6 9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 3v10.534M9 11l3 3 3-3"
      />
    </svg>
  );
};
export default Download_03;
