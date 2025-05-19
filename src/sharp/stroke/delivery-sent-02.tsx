import React from "react";
const DeliverySent_02: React.FC<
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
        d="M14.5 17.5h-5M15 16V4H2v13.5h2.5m11-11H19l3 4.5v6.5h-2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.827 12 11.5 9.5 8.827 7m2.187 2.5H5"
      />
    </svg>
  );
};
export default DeliverySent_02;
