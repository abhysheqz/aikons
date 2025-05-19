import React from "react";
const CssFile_02: React.FC<
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
        d="m2.25 22.75.001-21.5h10.11l7.389 7.38V12H4.5v9h15.25v1.75zM17.8 9.46l-6.238-6.255V9.46zm-7.05 3.79h-5v6.5h5v-2.5h-1.5v1h-2v-3.5h2v1h1.5zm5.5 0h-4.5v4h3v1h-3v1.5h4.5v-4h-3v-1h3zm5.5 0h-4.5v4h3v1h-3v1.5h4.5v-4h-3v-1h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CssFile_02;
