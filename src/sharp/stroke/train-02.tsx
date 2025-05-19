import React from "react";
const Train_02: React.FC<
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
        d="M20 10c0 4.418-3.582 10-8 10s-8-5.582-8-10a8 8 0 1 1 16 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 18c.939-1.22 2.382-2 4-2s3.061.78 4 2M9.249 9.604A9.8 9.8 0 0 0 12 10c.966 0 1.893-.145 2.751-.396 1.16-.34 1.668-.994.844-2.016-1.705-2.117-5.485-2.117-7.19 0-.824 1.022-.315 1.676.844 2.016ZM5 19l-2 3m16-3 2 3"
      />
    </svg>
  );
};
export default Train_02;
