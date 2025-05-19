import React from "react";
const Mouse_14: React.FC<
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
        d="m10 10 1.5-2M22 5.5 20 8l-5.5-4L13 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.185 18.994C.89 16.557 1.537 13.02 3.631 9.454c2.095-3.566 4.889-5.885 9.184-3.448s3.648 5.975 1.554 9.54c-2.095 3.566-4.889 5.885-9.184 3.448Z"
      />
    </svg>
  );
};
export default Mouse_14;
