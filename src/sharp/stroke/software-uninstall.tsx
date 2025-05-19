import React from "react";
const SoftwareUninstall: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM15 22H2v-7h18"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.245 15a8 8 0 1 0-12.49 0M16.5 4.5l-2 2M17 17l2.5 2.5m0 0L22 22m-2.5-2.5L17 22m2.5-2.5L22 17"
      />
    </svg>
  );
};
export default SoftwareUninstall;
