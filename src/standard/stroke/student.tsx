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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19 5-7-3-7 3 3.5 1.5v2S9.667 8 12 8s3.5.5 3.5.5v-2zm0 0v4M16.875 22h-9.75A1.625 1.625 0 0 1 5.5 20.375a4.875 4.875 0 0 1 4.875-4.875h3.25a4.875 4.875 0 0 1 4.875 4.875c0 .898-.727 1.625-1.625 1.625M15.5 8.5v1a3.5 3.5 0 1 1-7 0v-1"
      />
    </svg>
  );
};
export default Student;
