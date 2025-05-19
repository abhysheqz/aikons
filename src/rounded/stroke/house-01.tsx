import React from "react";
const House_01: React.FC<
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
        d="M13 2 2 7M12 3v19H7c-1.886 0-2.828 0-3.414-.586S3 19.886 3 18V7M12 7l10 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 22h7c1.886 0 2.828 0 3.414-.586S21 19.885 21 18v-6.5M18 10V7M7 11h1m-1 4h1M16 14h1M16.5 22v-4"
      />
    </svg>
  );
};
export default House_01;
