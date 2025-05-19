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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 20.5-.707-.707a1 1 0 0 0-.707-.293H5.5a1 1 0 0 1-1-1v-3.138a1 1 0 0 0-.232-.64L2.533 12.64a1 1 0 0 1 0-1.28l1.735-2.082a1 1 0 0 0 .232-.64V5.5a1 1 0 0 1 1-1h3.138a1 1 0 0 0 .64-.232l2.082-1.735a1 1 0 0 1 1.28 0l2.082 1.735a1 1 0 0 0 .64.232H18.5a1 1 0 0 1 1 1v3.086a1 1 0 0 0 .293.707L20.5 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 14.998v2m.009 2H17m5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM14.384 9.437a3.5 3.5 0 0 0-4.947 4.947"
      />
    </svg>
  );
};
export default SettingError_03;
