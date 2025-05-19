import React from "react";
const Link_05: React.FC<
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
        d="M13.5 17H17a5 5 0 0 0 0-10h-3.5m-3 10H7A5 5 0 0 1 7 7h3.5M8 12h8"
      />
    </svg>
  );
};
export default Link_05;
