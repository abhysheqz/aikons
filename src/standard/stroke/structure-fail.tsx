import React from "react";
const StructureFail: React.FC<
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
        d="M21 22a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zM21 8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 10.5 7 12m0 0-1.5 1.5M7 12l1.5 1.5M7 12l-1.5-1.5M12 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0M11.995 4.007l-2.992-.004a2 2 0 0 0-2.003 2V6.5m5 13.49-2.996.006a2 2 0 0 1-2.004-2V17.5"
      />
    </svg>
  );
};
export default StructureFail;
