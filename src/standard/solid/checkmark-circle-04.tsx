import React from "react";
const CheckmarkCircle_04: React.FC<
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
        d="M1 11.75C1 17.687 5.813 22.5 11.75 22.5S22.5 17.687 22.5 11.75c0-1.122-.172-2.206-.492-3.225-.763-2.427-2.555-5.626-7.033-7.033A10.8 10.8 0 0 0 11.75 1C5.813 1 1 5.813 1 11.75"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M21.419 2.007a1 1 0 0 1 .074 1.412l-9 10a1 1 0 0 1-1.45.038l-3-3a1 1 0 1 1 1.414-1.414l2.255 2.255 8.295-9.217a1 1 0 0 1 1.412-.074"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkCircle_04;
