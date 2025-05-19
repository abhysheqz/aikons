import React from "react";
const Hotel_01: React.FC<
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
        d="M2.25 22.75V5.25H1v-2h6.588c.898-1.245 2.59-2 4.412-2s3.514.755 4.412 2H23v2h-1.25v17.5h-7V16a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v6.75zm9-15.75h-1.5v5h1.5v-1.75h1.5V12h1.5V7h-1.5v1.75h-1.5zM5.5 8.75h2v-1.5h-2zm0 4h2v-1.5h-2zm0 4h2v-1.5h-2zm13-8h-2v-1.5h2zm0 4h-2v-1.5h2zm0 4h-2v-1.5h2z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13.25 16.75v6h-2.5v-6z" />
    </svg>
  );
};
export default Hotel_01;
