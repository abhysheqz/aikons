import React from "react";
const Tiff_02: React.FC<
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
        d="m2.252 1.25-.002 21.5h17.5V21H6v-5H4.5v-4h15.25V8.63l-7.389-7.38zm9.31 1.955L17.8 9.46h-6.237z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 13.25h4.5v1.5h-1.5v5h-1.5v-5h-1.5zm7 0v6.5h-1.5v-6.5zm1 0h3.5v1.5h-2v1h2v1.5h-2v2.5h-1.5zm4.5 0h3.5v1.5h-2v1h2v1.5h-2v2.5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tiff_02;
