import React from "react";
const Xsl_02: React.FC<
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
        d="m2.751 1.25-.001 21.5h17.5V21H4.932l2.29-4.5L4.934 12H20.25V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 13.25v5h2v1.5h-3.5v-6.5zM8.49 13.248l1.01 1.794 1.013-1.793h1.516L10.375 16.5l1.654 3.25h-1.516L9.5 17.958 8.49 19.75H6.97l1.654-3.25-1.654-3.25zM12.75 13.25h4v1.5h-2.5v1h2.5v4h-4v-1.5h2.5v-1h-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Xsl_02;
