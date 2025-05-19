import React from "react";
const BlushBrush_01: React.FC<
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
        d="m15.208 7 5.001-5 1.792 1.792-5.001 5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.002 16-3 6-2.5-2.5m.5-8.5-6 3 2.5 2.5m0 0 2.5-1.5m-2.5 1.5 3 3m0 0 1.5-2.5"
      />
      <path
        fill="currentColor"
        d="m14.5 6.5.53-.53-.53-.53-.53.53zm3 3 .53.53.531-.53-.53-.53zm-3 7.5-.53.53a.75.75 0 0 0 1.277-.455zM7.005 9.5l-.075-.746a.75.75 0 0 0-.456 1.276zM15 12l-.53-.53-.19.189-.027.266zm-3-3 .074.746.267-.026.189-.19zm1.97-1.97 3 3 1.06-1.06-3-3zm1.06 9.44-7.497-7.5-1.06 1.06 7.496 7.5zm1.94-7.5-2.5 2.5 1.06 1.06 2.5-2.5zm-3-3-2.5 2.5 1.06 1.06 2.5-2.5zm-6.892 4.276 4.996-.5-.15-1.492-4.996.5zm8.168 6.829.5-5-1.493-.15-.5 5z"
      />
    </svg>
  );
};
export default BlushBrush_01;
