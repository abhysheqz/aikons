import React from "react";
const Student: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19 5-7-3-7 3 3.5 1.5v2S9.667 8 12 8s3.5.5 3.5.5v-2zm0 0v4M15.5 8.5v1a3.5 3.5 0 1 1-7 0v-1M19 19c-4.283-4.667-9.717-4.667-14 0v3h14z"
      />
    </svg>
  );
};
export default Student;
