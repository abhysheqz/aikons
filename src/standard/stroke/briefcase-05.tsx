import React from "react";
const Briefcase_05: React.FC<
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
        d="M3.5 12v7.5a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 6-.377-2.641a1 1 0 0 0-.99-.859H9.867a1 1 0 0 0-.99.859L8.5 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 6h-17a1 1 0 0 0-1 1v2.957c0 .127.024.254.075.37 2.95 6.776 16.915 5.671 18.879-.036A.9.9 0 0 0 21.5 10V7a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
};
export default Briefcase_05;
