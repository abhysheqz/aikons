import React from "react";
const Csv_01: React.FC<
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
        d="m3.25 13.75.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 15.25v1.5h-3.5v1.5h3.5v4.5h-5v-1.5h3.5v-1.5h-3.5v-4.5zM8.25 17.75h-1.5v-1h-2.5v4.5h2.5v-1h1.5v2.5h-5.5v-7.5h5.5zM19.107 22.75h-1.629l-2.176-7.5h1.562l1.424 4.908 1.402-4.908h1.56z"
      />
    </svg>
  );
};
export default Csv_01;
