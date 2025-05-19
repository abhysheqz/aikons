import React from "react";
const Hdd: React.FC<
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
        d="M3.25 2A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM14.5 18.25v1.5h-5v-1.5zM12 14a4.5 4.5 0 1 0-3.823-2.126l3.116-3.116 1.414 1.414-3.124 3.124A4.5 4.5 0 0 0 12 14"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hdd;
