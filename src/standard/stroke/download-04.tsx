import React from "react";
const Download_04: React.FC<
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
        d="m9.5 12 2.5 2.5 2.5-2.5M12 4.5v9.391M20 16.5l-.221 1.329a2 2 0 0 1-1.973 1.671H6.194a2 2 0 0 1-1.973-1.671L4 16.5"
      />
    </svg>
  );
};
export default Download_04;
