import React from "react";
const UniversalAccess: React.FC<
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
      <path fill="currentColor" d="M10 4.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
      <path
        fill="currentColor"
        d="M6.625 6.22a1 1 0 1 0-1.25 1.56C6.523 8.7 7.936 9.375 9.5 9.726v4.692l-.986 5.919a1 1 0 0 0 1.973.328l.86-5.164h1.306l.86 5.164a1 1 0 1 0 1.973-.328l-.986-5.919V9.725c1.564-.351 2.977-1.026 4.125-1.944a1 1 0 0 0-1.25-1.562C16.017 7.306 14.122 8 12 8s-4.016-.694-5.375-1.78"
      />
    </svg>
  );
};
export default UniversalAccess;
