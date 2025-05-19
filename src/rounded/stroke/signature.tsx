import React from "react";
const Signature: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12.634c-4 3.512-4.572-2.013-6.65-1.617-2.35.447-3.85 5.428-2.35 5.428s-.5-5.945-2.5-3.89-2.64 4.74-4.265 2.748C-1.5 5.813 5-1.15 8.163 3.457 10.165 6.373 6.5 16.977 2 22M9 21h10"
      />
    </svg>
  );
};
export default Signature;
