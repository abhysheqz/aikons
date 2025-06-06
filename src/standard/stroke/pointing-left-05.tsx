import React from "react";
const PointingLeft_05: React.FC<
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
        d="M8 4.5H2.867M4.5 2 2 4.5 4.5 7M22 20h-1.5l-1.404 1.123a4 4 0 0 1-2.5.877H12.5a2 2 0 0 1-2-2v-1M22 10h-1.5l-6.664-4.611a1.74 1.74 0 0 0-2.183-.008 1.736 1.736 0 0 0-.234 2.487L13.5 10h-10a1.5 1.5 0 0 0 0 3h5m0 0h2m-2 0v1a2 2 0 0 0 2 2h1m1 3h-1a2 2 0 0 1-2-2v-1"
      />
    </svg>
  );
};
export default PointingLeft_05;
