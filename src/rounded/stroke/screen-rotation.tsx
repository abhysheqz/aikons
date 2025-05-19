import React from "react";
const ScreenRotation: React.FC<
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
        d="M2 12c.131 3.194 2.198 9.442 9.3 9.978.418.031.627.047.687-.08.06-.126-.091-.273-.393-.567l-1.356-1.32M22 12c-.131-3.193-2.198-9.442-9.3-9.978-.418-.031-.627-.047-.687.08-.06.126.091.273.393.567l1.356 1.32M8.076 13.446C6.713 12.083 6.03 11.4 6 10.585s.603-1.45 1.868-2.716c1.266-1.265 1.899-1.898 2.716-1.868.816.03 1.498.712 2.86 2.075l2.48 2.478c1.362 1.363 2.044 2.045 2.074 2.862.03.816-.603 1.449-1.868 2.715s-1.899 1.898-2.716 1.868c-.816-.03-1.498-.712-2.86-2.075z"
      />
    </svg>
  );
};
export default ScreenRotation;
