import React from "react";
const StepInto: React.FC<
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
        d="M2 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M14 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M2 4a1 1 0 0 1 1-1h6.523a3 3 0 0 1 3 3v7.524H14a1 1 0 0 1 .707 1.708l-2.476 2.476a1 1 0 0 1-1.408.007L8.3 15.238a1 1 0 0 1 .7-1.714h1.523V6a1 1 0 0 0-1-1H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StepInto;
