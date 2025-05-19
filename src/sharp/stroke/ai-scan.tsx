import React from "react";
const AiScan: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 16.5v5h-5m-9 0h-5v-5m0-9v-5h5m9 0h5v5M12 8.5v-2m-2 5v.5m4-.5v.5m-7 4.5h10v-8H7z"
      />
    </svg>
  );
};
export default AiScan;
