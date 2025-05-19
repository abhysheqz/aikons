import React from "react";
const VerticalResize: React.FC<
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
        d="M20 11H4V9h16zM20 15H4v-2h16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 6v4h-2V6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.944 1.25a.75.75 0 0 1 .645.36l3.051 5a.75.75 0 0 1-.877 1.102L12 6.79l-2.763.92a.75.75 0 0 1-.883-1.092l2.95-5a.75.75 0 0 1 .64-.369M15.587 16.533a.75.75 0 0 1 .053.858l-3.05 5a.75.75 0 0 1-1.287-.01l-2.949-5a.75.75 0 0 1 .883-1.093L12 17.21l2.763-.92a.75.75 0 0 1 .824.244"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 14v4h-2v-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VerticalResize;
