import React from "react";
const Lantern: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 7.5h12v11h-12zM6.5 7.5C7.217 5.41 9.229 4 11.495 4h2.01c2.266 0 4.278 1.41 4.995 3.5zM18.5 18.5c-.717 2.09-2.729 3.5-4.995 3.5h-2.01c-2.266 0-4.278-1.41-4.995-3.5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.9 7.5H5.5l1.4 1m11.2-1h1.4l-1.4 1M18.1 18.5h1.4l-1.4-1m-11.2 1H5.5l1.4-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21.5 11 1-.5m-1 4.5 1 .5M3.5 11l-1-.5m1 4.5-1 .5M12.5 12v2M12.5 2v2"
      />
    </svg>
  );
};
export default Lantern;
