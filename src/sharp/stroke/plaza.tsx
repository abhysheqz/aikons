import React from "react";
const Plaza: React.FC<
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
        d="M3 20.982h18"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 20.983V10.99l-6.085-3.175"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 8.99h3m-3 3.998h3m-3 3.997h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.019 20.999V6.447l7.882-3.44a.01.01 0 0 1 .014.01v17.982"
      />
    </svg>
  );
};
export default Plaza;
