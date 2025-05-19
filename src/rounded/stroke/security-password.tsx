import React from "react";
const SecurityPassword: React.FC<
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
        strokeWidth={1.5}
        d="m8.5 11 1 1m0 0 1 1m-1-1 1-1m-1 1-1 1M3.5 11l1 1m0 0 1 1m-1-1 1-1m-1 1-1 1M13.5 11l1 1m0 0 1 1m-1-1 1-1m-1 1-1 1M18.5 11l1 1m0 0 1 1m-1-1 1-1m-1 1-1 1M19.634 16c-1.683 2.803-4.527 4.622-6.228 5.52-.607.32-.91.48-1.406.48s-.799-.16-1.406-.48c-1.7-.898-4.545-2.717-6.228-5.52M21 8c-.001-1.455-.024-2.211-.404-2.715-.404-.535-1.318-.794-3.145-1.314a24.6 24.6 0 0 1-3.229-1.173C13.023 2.266 12.424 2 12 2s-1.023.266-2.222.798c-.88.39-1.98.818-3.229 1.173-1.827.52-2.74.78-3.145 1.314C3.024 5.79 3.001 6.545 3 8"
      />
    </svg>
  );
};
export default SecurityPassword;
