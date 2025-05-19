import React from "react";
const Cpu: React.FC<
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
        d="M19.5 4.5h-15v15h15zM9.5 2v2.5m5-2.5v2.5M9.5 19.5V22m5-2.5V22M13 9l-4 4M15 13l-2 2M4.5 9.5H2m2.5 5H2M22 14.5h-2.5m2.5-5h-2.5"
      />
    </svg>
  );
};
export default Cpu;
