import React from "react";
const PackageDimensions_02: React.FC<
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
        d="M7.75 1.25v1h12.5v-1h1.5v3.5h-1.5v-1H7.75v1h-1.5v-3.5zM14 5.117l7.75 3.322v10.989L14 22.749l-7.75-3.321V8.438zm0 6.001 5.096-2.184-1.845-.79-4.908 2.264zm-4.25-.19v2.755h1.5V11.57l2 .858v8.368l-5.5-2.358v-8.368zm.737-1.315 4.908-2.265L14 6.75 8.904 8.934zM5.75 6.25h-3.5v1.5h1v12.5h-1v1.5h3.5v-1.5h-1V7.75h1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageDimensions_02;
