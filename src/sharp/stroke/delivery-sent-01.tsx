import React from "react";
const DeliverySent_01: React.FC<
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
        strokeWidth={1.5}
        d="M19.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM9.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 17.5h-5m10 0H22V13a6.5 6.5 0 0 0-6.5-6.5M15 16V4H2v13.5h2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9 12 2.673-2.5L9 7m2.177 2.5H5"
      />
    </svg>
  );
};
export default DeliverySent_01;
