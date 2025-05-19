import React from "react";
const Female_02: React.FC<
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
        d="m14.5 16.5 3.716 1.118a4.07 4.07 0 0 1 2.76 2.892c.136.536-.327.99-.882.99H3.906c-.555 0-1.018-.454-.882-.99a4.07 4.07 0 0 1 2.76-2.892L9.5 16.5v-2.155a16.5 16.5 0 0 1-2.97-.646c-.284-.091-.41-.416-.295-.693.41-.99.765-2.495.765-5.393 0-5.904 5.5-5.904 7-3.936 3-.492 3 1.968 3 4.92 0 1.904.434 3.51.776 4.405.108.279-.022.606-.307.697-.9.29-1.9.51-2.969.646z"
      />
    </svg>
  );
};
export default Female_02;
