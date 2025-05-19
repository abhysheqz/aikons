import React from "react";
const PackageDimensions_01: React.FC<
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
        d="M8.25 1.75v1h12.5v-1h1.5v3.5h-1.5v-1H8.25v1h-1.5v-3.5zm3.25 5H6.75v15.5h15.5V6.75H17.5v6.75h-6zm-1.75 11h4.5v1.5h-4.5zm6.5-11h-3.5v5.5h3.5zm-11 0h-3.5v1.5h1v12.5h-1v1.5h3.5v-1.5h-1V8.25h1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageDimensions_01;
