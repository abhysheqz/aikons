import React from "react";
const SettingError_03: React.FC<
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
        strokeWidth={1.5}
        d="M14.384 9.437a3.5 3.5 0 0 0-4.947 4.947M17 14.007V17m0 1.256v1.489M12 17a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m20.5 10-1-1V4.51a.01.01 0 0 0-.01-.01H15l-2.993-2.495a.01.01 0 0 0-.012 0L9 4.5H4.51a.01.01 0 0 0-.01.01V9l-2.495 2.993a.01.01 0 0 0 0 .013L4.501 15v4.49q0 .009.01.01H9l1 1"
      />
    </svg>
  );
};
export default SettingError_03;
