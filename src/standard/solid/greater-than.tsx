import React from "react";
const GreaterThan: React.FC<
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
        d="M6.22 3.375a1 1 0 0 1 1.405-.156l10 8a1 1 0 0 1 0 1.562l-10 8a1 1 0 0 1-1.25-1.562L15.4 12 6.375 4.78a1 1 0 0 1-.156-1.405"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GreaterThan;
