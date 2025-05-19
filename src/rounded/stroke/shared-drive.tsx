import React from "react";
const SharedDrive: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 18H6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4M9.5 8.5a1 1 0 1 0 0-2m0 2a1 1 0 0 1 0-2m0 2v-2m-1.5 6h3m-4 1V13a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v.5zM14.5 8.5a1 1 0 1 0 0-2m0 2a1 1 0 1 1 0-2m0 2v-2m0 6H16m-1.5 1H17V13a2 2 0 0 0-2-2h-.5zM16.5 20v.01M13.5 20v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 20V8c0-2.828 0-4.243-.879-5.121C18.243 2 16.828 2 14 2h-4c-2.828 0-4.243 0-5.121.879C4 3.757 4 5.172 4 8v12"
      />
    </svg>
  );
};
export default SharedDrive;
