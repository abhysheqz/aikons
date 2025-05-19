import React from "react";
const CssFile_01: React.FC<
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
        d="M2.25 15.25h5.5v2.5h-1.5v-1h-2.5v4.5h2.5v-1h1.5v2.5h-5.5zm7 0h5.5v1.5h-4v1.5h4v4.5h-5.5v-1.5h4v-1.5h-4zm7 0h5.5v1.5h-4v1.5h4v4.5h-5.5v-1.5h4v-1.5h-4zM3.25 13.75l.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CssFile_01;
