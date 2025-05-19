import React from "react";
const NoSignal: React.FC<
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
        d="M16 18h5v2h-5zM9.5 18h5v2h-5zM3 18h5v2H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoSignal;
