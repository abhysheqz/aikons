import React from "react";
const Plant_04: React.FC<
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
        d="M2.25 4.222c0-.537.436-.972.975-.972H6.15a6.83 6.83 0 0 1 5.813 3.238 8.02 8.02 0 0 0-2.188 5.51V12h-.7C5.305 12 2.25 8.953 2.25 5.195zm12.675 9.724h-1.95v5.832a.974.974 0 0 1-.975.972.974.974 0 0 1-.975-.972v-7.78c.002-3.757 3.057-6.802 6.825-6.802h2.925c.539 0 .975.435.975.972v.972c0 3.759-3.055 6.805-6.825 6.805"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plant_04;
