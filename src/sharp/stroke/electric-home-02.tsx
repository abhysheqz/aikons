import React from "react";
const ElectricHome_02: React.FC<
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
        d="M14.034 13.01h1.473v3.005l-1.983 2.962h-2.996l-2.017-2.962V13.01h1.482m4.04 0V10m0 3.011h-4.04m0 0V10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.981 19.357v2.633H4.53a.01.01 0 0 1-.01-.008L2.022 8.409a.01.01 0 0 1 .004-.01l9.978-6.41a.01.01 0 0 1 .01 0l10.002 6.55a.01.01 0 0 1 .004.01l-2.493 13.433a.01.01 0 0 1-.01.008H15.01"
      />
    </svg>
  );
};
export default ElectricHome_02;
