import React from "react";
const QrCode_01: React.FC<
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
        d="M18 15v3h-4v-3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.994 2H2v6.994M15.006 2H22v6.994M15.006 22H22v-6.994M8.994 22H2v-6.994"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 6v7H6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6v4H6V6zM6 18h5M17 10v2M17 6v2"
      />
    </svg>
  );
};
export default QrCode_01;
