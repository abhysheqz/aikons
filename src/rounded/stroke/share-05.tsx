import React from "react";
const Share_05: React.FC<
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
        d="M19 13v1c0 3.3 0 4.95-1.025 5.975S15.3 21 12 21h-2c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14v-2c0-3.3 0-4.95 1.025-5.975S6.7 5 10 5h1M14 3h4c1.414 0 2.121 0 2.56.44C21 3.878 21 4.585 21 6v4m-1-6-9 9"
      />
    </svg>
  );
};
export default Share_05;
