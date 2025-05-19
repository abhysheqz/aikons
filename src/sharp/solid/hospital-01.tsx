import React from "react";
const Hospital_01: React.FC<
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
        d="M15 1.25h-2v2h-2v-2H9v6h2v-2h2v2h2zM22 22.75H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 4.25v3A1.5 1.5 0 0 0 9 8.75h6a1.5 1.5 0 0 0 1.5-1.5v-3H20a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75h-4.75V17a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v5.75H4a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 4 4.25zm8.5 7.5h-3v-1.5h3zm-3 3h3v-1.5h-3zm-3 0H7v-1.5h3zm-3-3h3v-1.5H7z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13.75 22.75v-5h-3.5v5z" />
    </svg>
  );
};
export default Hospital_01;
