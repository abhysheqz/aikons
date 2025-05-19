import React from "react";
const EraserAuto: React.FC<
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
        d="m9.5 9.505-3-7.004h-1l-3 7.004M4 7.004h4M11.735 11.746l-5.746 5.758a.01.01 0 0 0 0 .014l3.999 3.98h3.007l4.295-4.282m-5.555-5.47 4.262-4.238a.01.01 0 0 1 .014 0l5.487 5.505a.01.01 0 0 1 0 .014l-4.208 4.19m-5.555-5.47 5.555 5.47"
      />
    </svg>
  );
};
export default EraserAuto;
