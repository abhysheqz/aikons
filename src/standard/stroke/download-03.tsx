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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 10 1.074.358a2 2 0 0 1 1.255 2.558l-2.126 6.075A3 3 0 0 1 15.872 21H8.128a3 3 0 0 1-2.831-2.009L3.17 12.916a2 2 0 0 1 1.255-2.558L5.5 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 11.5 12 14l2.5-2.5M12 3v10.391"
      />
    </svg>
  );
};
export default Download_03;
