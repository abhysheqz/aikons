import React from "react";
const Keyboard: React.FC<
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
        d="M22 8H2v14h20z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 8V5h2V2" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 12.5h2m3 0h2m3 0h2m-12 5h12"
      />
    </svg>
  );
};
export default Keyboard;
