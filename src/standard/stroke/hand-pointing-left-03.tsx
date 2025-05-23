import React from "react";
const HandPointingLeft_03: React.FC<
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
        d="M22 18.5h-1.5l-1.404 1.123a4 4 0 0 1-2.5.877H12.5a2 2 0 0 1-2-2v-1m11.5-9h-1.5l-6.664-4.61a1.74 1.74 0 0 0-2.183-.01 1.736 1.736 0 0 0-.234 2.488l2.08 2.132h-10a1.5 1.5 0 0 0 0 3h5m0 0h2m-2 0v1a2 2 0 0 0 2 2h1m1 3h-1a2 2 0 0 1-2-2v-1"
      />
    </svg>
  );
};
export default HandPointingLeft_03;
