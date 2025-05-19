import React from "react";
const FocusPoint: React.FC<
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
        d="M13.5 8h-3V6h3zM7 13H4v-2h3zm6.5 0h-3v-2h3zm6.5 0h-3v-2h3zm-6.5 5h-3v-2h3zM22.25 1.75v6.345h-1.952V3.702h-5.37V1.75zm-13.178 0v1.952h-5.37v4.393H1.75V1.75zm-7.32 14.155h1.952v4.392h5.368v1.953h-7.32zm18.546 4.393v-4.393h1.952v6.345h-7.321v-1.953z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FocusPoint;
