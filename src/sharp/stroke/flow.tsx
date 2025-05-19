import React from "react";
const Flow: React.FC<
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
        d="M21 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.5 9.5V3H3v6.5zM9.5 20.5V14H3v6.5zM20.5 20.5V14H14v6.5zM17.5 10v4M14 17.5h-4m0-11h4"
      />
    </svg>
  );
};
export default Flow;
