import React from "react";
const Advertisiment: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-18A.75.75 0 0 0 22 3zm8.019 5h-2.04l-3.182 8.487 1.404.526.943-2.513h3.71l.943 2.513 1.404-.526zm.273 5H7.706L9 9.553zm8.957 4.5V9.75h-1.5V12H16.5a2.75 2.75 0 0 0 0 5.5zm-4-2.75c0-.69.56-1.25 1.25-1.25h1.25V16H16.5c-.69 0-1.25-.56-1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Advertisiment;
