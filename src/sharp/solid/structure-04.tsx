import React from "react";
const Structure_04: React.FC<
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
        d="M1.25 9A.75.75 0 0 1 2 8.25h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM13.25 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75zM13.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12.22 12 3.1-4.427-1.64-1.147-3.5 5a1 1 0 0 0 0 1.147l3.5 5 1.64-1.147z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Structure_04;
