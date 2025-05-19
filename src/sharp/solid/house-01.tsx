import React from "react";
const House_01: React.FC<
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
        d="M18.248 7v2.5h-1.5V7zM13.183 1.25 1.002 7.45l.628 1.367 1.118-.615V22.75h9.5V3.34l1.564-.724zm-7.277 10.5h3v-1.5h-3zm0 4h3v-1.5h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.498 22.75V18h-2v4.75h-2.75V7.229l9.25 4.345-.62 1.366-1.13-.684V22.75zm.5-8h-3v-1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default House_01;
