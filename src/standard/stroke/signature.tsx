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
        d="M22 12.5c-4 3.512-4.572-1.879-6.65-1.483C13 11.464 11.5 16.5 13 16.5s-.5-6-2.5-3.944-2.64 4.739-4.265 2.747C-1.5 5.813 5-1.15 8.163 3.457 10.165 6.373 6.5 16.977 2 22M9 21h10"
      />
    </svg>
  );
};
export default Signature;
