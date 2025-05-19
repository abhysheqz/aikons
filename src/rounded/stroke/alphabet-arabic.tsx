import React from "react";
const AlphabetArabic: React.FC<
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
        strokeWidth={1.5}
        d="M9 4v7M13 14h7.743c.706 0 1.059 0 1.205-.26s-.028-.524-.376-1.053C20.452 10.984 18.784 10 17.117 10M13 4v13.667c0 1.1 0 1.65-.293 1.991S11.943 20 11 20h-1M5 4v13.667c0 1.1 0 1.65-.293 1.991S3.943 20 3 20H2"
      />
    </svg>
  );
};
export default AlphabetArabic;
