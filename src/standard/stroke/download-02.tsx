import React from "react";
const Download_02: React.FC<
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
        d="m3 14 2.447 4.894A2 2 0 0 0 7.237 20h9.527a2 2 0 0 0 1.789-1.106L21 14M9.5 11.5 12 14l2.5-2.5M12 4v9.391"
      />
    </svg>
  );
};
export default Download_02;
