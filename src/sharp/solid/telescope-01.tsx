import React from "react";
const Telescope_01: React.FC<
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
        d="M14.278 12.719a.75.75 0 0 0 .575-.09L22 8.232 17.718 1.5l-7.114 3.83a.75.75 0 0 0-.292 1.039l.187.32-4.425 2.66a.75.75 0 0 0-.25 1.04l.095.152-3.92 2.702 1.621 3.244 4.624-2.227.08.128a.75.75 0 0 0 .994.262l4.42-2.407.074.126c.102.174.27.3.466.35M7.502 10.24l3.754-2.256 1.728 2.962-3.761 2.048z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.875 11.68 4.5 10-1.824.82-3.588-7.974L8.375 22.5l-1.824-.82 4.13-9.18z"
      />
    </svg>
  );
};
export default Telescope_01;
