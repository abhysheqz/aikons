import React from "react";
const Zip_02: React.FC<
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
        d="M2.774 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.22-.72 2.671-1.752H9a2 2 0 0 1-1.715-3.029l1.22-2.033A2 2 0 0 1 9 11.998h11.25V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.668A2.924 2.924 0 0 0 2.75 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 13.999a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .643 1.136l-2.318 3.864H12a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.643-1.136l2.318-3.864H9a.75.75 0 0 1-.75-.75m6.25-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m1.75.75a.75.75 0 0 1 .75-.75h2a2.25 2.25 0 0 1 0 4.5h-1.25v1.25a.75.75 0 0 1-1.5 0zm1.5 2.25H19a.75.75 0 0 0 0-1.5h-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zip_02;
