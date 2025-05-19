import React from "react";
const ArrowUpDouble: React.FC<
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
        d="M19 11.155 17.586 12.5 12 7.19 6.414 12.5 5 11.155 12 4.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 18.155 17.586 19.5 12 14.19 6.414 19.5 5 18.155l7-6.655z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUpDouble;
