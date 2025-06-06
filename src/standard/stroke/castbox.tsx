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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 16.152V7.848a2 2 0 0 0-.986-1.724l-6.583-3.87a1.84 1.84 0 0 0-1.862 0l-6.583 3.87A2 2 0 0 0 3.5 7.848v8.304a2 2 0 0 0 .986 1.724l6.583 3.87a1.84 1.84 0 0 0 1.862 0l6.583-3.87a2 2 0 0 0 .986-1.724M17 12.5v1m-2-2V14m-2 .5V10m-2-.5V14m-2-3.5v5m-2-4v2M9.5 12h1m1 .5h1m-5 0h1"
      />
    </svg>
  );
};
export default Castbox;
