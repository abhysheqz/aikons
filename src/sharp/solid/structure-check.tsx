import React from "react";
const StructureCheck: React.FC<
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
        d="M6.002 4a1 1 0 0 1 1-1H12v2H8.001v2H6zM8 19v-2H6v3a1 1 0 0 0 1 1h5v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 16a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75zM14.25 2a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 6.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m-.44 8.294 3.212-3.91-1.546-1.269-1.9 2.313-.845-.741-1.319 1.504z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StructureCheck;
