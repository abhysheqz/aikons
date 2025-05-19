import React from "react";
const BloodPressure: React.FC<
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
        d="M8.5 13H11l2.19 4 2.096-6 2.214 4h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.351 12C19.22 6.246 12 2 12 2S3.5 7 3.5 13.5A8.5 8.5 0 0 0 19.212 18"
      />
    </svg>
  );
};
export default BloodPressure;
