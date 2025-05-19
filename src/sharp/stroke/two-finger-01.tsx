import React from "react";
const TwoFinger_01: React.FC<
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
        d="M17.091 10.5v2m0-2a1.5 1.5 0 0 0-1.5-1.5h-1.41m2.91 1.5H18.5A1.5 1.5 0 0 1 20 12v1.667c0 2.173 0 3.26-.321 4.125-.187.502-1.619 1.708-1.619 1.708V22M11.273 5c0-.829-.652-1.5-1.455-1.5S8.364 4.172 8.364 5v8.462l-1.572-1.625a1.6 1.6 0 0 0-2.434.14 1.74 1.74 0 0 0-.03 2.072L8.363 19.5V22m2.909-17v5.5m0-5.5V3.5c0-.828.65-1.5 1.454-1.5s1.455.672 1.455 1.5V9m0 0v2.5"
      />
    </svg>
  );
};
export default TwoFinger_01;
