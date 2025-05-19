import React from "react";
const HtmlFile_01: React.FC<
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
        d="M3.25 16.25v2.5h1.5v-2.5h1.5v6.5h-1.5v-2.5h-1.5v2.5h-1.5v-6.5zm3.5 0h4.5v1.5h-1.5v5h-1.5v-5h-1.5zm5 0h1.675l1.075 1.792 1.075-1.792h1.675v6.5h-1.5v-3.876l-1.25 2.084-1.25-2.084v3.876h-1.5zm8 0v5h2.5v1.5h-4v-6.5zM2.75 14.75l.001-13.5h10.11l7.389 7.38v6.12zM18.3 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HtmlFile_01;
