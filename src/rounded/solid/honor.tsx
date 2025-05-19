import React from "react";
const Honor: React.FC<
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
        d="M1.5 3a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2h-19a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 3a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v10.999c0 1.188-.104 2.128-.562 2.937-.459.81-1.21 1.382-2.23 1.994l-3.045 1.827c-.475.285-.879.527-1.233.694-.378.177-.754.297-1.18.297s-.802-.12-1.18-.297c-.354-.167-.758-.41-1.233-.694l-.03-.018-3.015-1.81c-1.02-.61-1.771-1.183-2.23-1.993-.458-.81-.562-1.749-.562-2.937zM9.5 7a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Honor;
