import React from "react";
const ArrowLeft_05: React.FC<
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
        d="M3.5 18V6h2v12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.45 11h7.05v2h-7.05v4.5L7.5 12l5.95-5.5z"
      />
    </svg>
  );
};
export default ArrowLeft_05;
