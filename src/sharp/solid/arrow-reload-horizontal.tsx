import React from "react";
const ArrowReloadHorizontal: React.FC<
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
        d="M17.5 2 22 6.5 17.5 11l-1.414-1.414L18.172 7.5H4V12H2V6.5a1 1 0 0 1 1-1h15.172l-2.086-2.086zM22.002 12v5.5a1 1 0 0 1-1 1H5.828l2.086 2.086L6.5 22 2 17.5 6.5 13l1.414 1.414L5.828 16.5h14.174V12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowReloadHorizontal;
