import React from "react";
const CustomerService_02: React.FC<
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
        d="M4.887 20.896c-.816-.709-1.864-1.619-2.341-2.103-.483-.49-.854-.96-1.061-1.504A3.5 3.5 0 0 1 1.25 16a3.5 3.5 0 0 1 .235-1.288c.207-.544.577-1.014 1.06-1.504.478-.484 1.526-1.395 2.342-2.103l2.863 1.432v6.927zM19.113 11.106c.816.707 1.864 1.618 2.341 2.102.483.49.854.96 1.061 1.504.16.417.24.85.235 1.288.005.438-.075.872-.235 1.29-.207.543-.578 1.013-1.06 1.503-.478.484-1.526 1.395-2.342 2.103l-2.863-1.432v-6.927z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.627 21.529c-2.023 1.628-5.231 1.628-7.254 0l1.254-1.558c1.29 1.038 3.455 1.038 4.746 0zM12 3.205A8.795 8.795 0 0 0 3.205 12v3.909H1.25V12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12v3.909h-1.954V12A8.795 8.795 0 0 0 12 3.205"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CustomerService_02;
