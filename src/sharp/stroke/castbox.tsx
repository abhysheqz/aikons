import React from "react";
const Castbox: React.FC<
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
        d="M20.5 6.704 12 2 3.5 6.704v10.593L12 22l8.5-4.703zM17 12.5v1m-2-2V14m-2 .5V10m-2-.5V14m-2-3.5v5m-2-4v2M9.5 12h1m1 .5h1m-5 0h1"
      />
    </svg>
  );
};
export default Castbox;
