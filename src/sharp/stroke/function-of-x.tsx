import React from "react";
const FunctionOfX: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 18.222c.189.85.57 1.778 1.562 1.778 1.72 0 2.149-1.778 3.438-8s1.719-8 3.438-8c.993 0 1.373.928 1.562 1.778m-7.083 4h5.52M21 12c1.38 3.253 1.285 4.98 0 8M12 12c-1.38 3.253-1.285 4.98 0 8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.705 18.005h-.73c-.853-.181-.912-.874-1.19-1.372-.091-.213-.186-.43-.278-.636m0 0a37 37 0 0 0-.597-1.297c-.26-.491-.36-.702-1.629-.702m2.226 1.999c.176-.234.35-.467.526-.688.61-.724 1.216-1.311 1.982-1.311m-2.508 1.999c-.754 1.004-1.522 2.008-2.509 2.008"
      />
    </svg>
  );
};
export default FunctionOfX;
