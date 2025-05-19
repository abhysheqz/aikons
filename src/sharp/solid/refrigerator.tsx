import React from "react";
const Refrigerator: React.FC<
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
        d="M4.25 2A.75.75 0 0 1 5 1.25h14a.75.75 0 0 1 .75.75v7.25H4.25zm0 8.75h15.5V22a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75zM9 5v2H7V5zm0 12v-4H7v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Refrigerator;
