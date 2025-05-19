import React from "react";
const ArrowDownDouble: React.FC<
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
        d="M19 12.845 17.586 11.5 12 16.81 6.414 11.5 5 12.845l7 6.655z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 5.845 17.586 4.5 12 9.81 6.414 4.5 5 5.845l7 6.655z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowDownDouble;
