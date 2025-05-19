import React from "react";
const Flaticon: React.FC<
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
        d="M11.033 20.998 1.998 6.036l3.024-3.038 10.976.038a.01.01 0 0 1 .009.015L13.66 7.026H6.644L8.32 9.761h3.723a.01.01 0 0 1 .01.015l-1.826 3.186 3.678 6.054a.01.01 0 0 1-.003.013l-2.854 1.972a.01.01 0 0 1-.014-.003Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.37 12.607 5.77-9.559a.01.01 0 0 1 .016-.001l2.843 2.99A.01.01 0 0 1 22 6.05l-6.265 10.356a.01.01 0 0 1-.017 0z"
      />
    </svg>
  );
};
export default Flaticon;
