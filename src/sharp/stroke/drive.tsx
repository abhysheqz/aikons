import React from "react";
const Drive: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 8.5a1 1 0 1 0 0-2m0 2a1 1 0 1 1 0-2m0 2v-2m-2 6h4m-5 1V13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5zM16.5 20v.01M13.5 20v.01M18 18H6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 19V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v15"
      />
    </svg>
  );
};
export default Drive;
