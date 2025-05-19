import React from "react";
const ToggleOn: React.FC<
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
        d="M22 6H2v12h20z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M19 9h-6v6h6z" />
    </svg>
  );
};
export default ToggleOn;
