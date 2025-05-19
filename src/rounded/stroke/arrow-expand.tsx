import React from "react";
const ArrowExpand: React.FC<
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
        d="M8 3.098s-3.966-.356-4.612.29S3.098 8 3.098 8M8 20.902s-3.966.356-4.612-.29S3.098 16 3.098 16M16 3.098s3.966-.356 4.612.29.29 4.612.29 4.612M16 20.902s3.966.356 4.612-.29.29-4.612.29-4.612M14.01 9.998l6.053-6.051M9.997 14.002 3.64 20.381M9.997 10.002 3.846 3.86M13.98 14.002l6.548 6.496"
      />
    </svg>
  );
};
export default ArrowExpand;
