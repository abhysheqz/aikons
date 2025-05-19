import React from "react";
const PointingLeft_02: React.FC<
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
        d="m17.185 7.85.296.184c.466.283 1.237.903 1.851 1.413a67 67 0 0 1 .948.803H22a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-1.845L18 21.681c-.777.371-1.937.817-3.107.993-1.14.17-2.518.115-3.46-.82-2.047-2.035-2.622-4.74-2.685-6.604H3.75a2.5 2.5 0 0 1 0-5h5.884c.234-.293.624-.767 1.085-1.266.373-.403.802-.833 1.24-1.2.426-.356.914-.699 1.403-.869.872-.303 1.677-.148 2.358.133.523.215 1.035.534 1.465.803M5.207 1.293a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 1.414-1.414L4.414 5.5H8a1 1 0 1 0 0-2H4.414l.793-.793a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_02;
