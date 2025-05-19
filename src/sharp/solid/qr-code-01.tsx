import React from "react";
const QrCode_01: React.FC<
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
      <path fill="currentColor" d="M18 15v3h-4v-3z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 1.5h7.63v1.909H3.41v5.722H1.5zm19.09 1.909h-5.72v-1.91h7.63v7.632h-1.91zm1.91 11.46v7.63h-7.63v-1.908h5.72v-5.722zm-21 0h1.91v5.722h5.72V22.5H1.5zM12 12V6h2v7a1 1 0 0 1-1 1H6v-2z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M10 6v4H6V6z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 18H6v-2h5zM16 12v-2h2v2zM16 8V6h2v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QrCode_01;
