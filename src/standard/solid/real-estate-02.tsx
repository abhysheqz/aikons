import React from "react";
const RealEstate_02: React.FC<
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
        d="M1.25 22a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M1.84 12.136c.377-.504.957-.886 1.66-.886s1.283.382 1.66.886c.378.504.59 1.165.59 1.864s-.212 1.36-.59 1.864c-.377.504-.957.886-1.66.886s-1.283-.382-1.66-.886C1.461 15.36 1.25 14.7 1.25 14s.212-1.36.59-1.864"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 15.25a.75.75 0 0 1 .75.75v5.826a.75.75 0 0 1-1.5 0V16a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.28 1.304a.76.76 0 0 0-1.03.71V8.25H15c.966 0 1.75.784 1.75 1.75v12l5.004.001.01-7.251H20a.75.75 0 0 1 0-1.5h1.766l.002-1.5H20a.75.75 0 0 1 0-1.5h1.77l.002-1.5H20a.75.75 0 0 1 0-1.5h1.774l.002-1.505a1.75 1.75 0 0 0-1.12-1.633z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.25 22h-6.5V10A.25.25 0 0 1 9 9.75h6a.25.25 0 0 1 .25.25zm-3.89-8.25h1.28a.75.75 0 1 0 0-1.5h-1.28a.75.75 0 0 0 0 1.5m0 3h1.28a.75.75 0 1 0 0-1.5h-1.28a.75.75 0 0 0 0 1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RealEstate_02;
