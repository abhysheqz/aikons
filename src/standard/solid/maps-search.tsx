import React from "react";
const MapsSearch: React.FC<
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
        d="M13 17.6a4.6 4.6 0 1 1 8.482 2.468l1.225 1.225a1 1 0 0 1-1.414 1.414l-1.225-1.225A4.6 4.6 0 0 1 13 17.6m4.6-2.6a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.776 19.419 8.75 18.122V1.49l5.5 2.357v8.655a6.1 6.1 0 0 0-2.75 5.099c0 .633.097 1.244.276 1.818M15.75 11.786V4.235H21c.966 0 1.75.783 1.75 1.75v8.345a6.1 6.1 0 0 0-5.15-2.83c-.645 0-1.267.1-1.85.286M7.25 1.528l-5.033 2.51a1.75 1.75 0 0 0-.967 1.565v11.994a1.75 1.75 0 0 0 2.303 1.66l3.697-1.232z"
      />
    </svg>
  );
};
export default MapsSearch;
