import React from "react";
const HorizontalResize: React.FC<
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
        d="M11 4v16H9V4zM15 4v16h-2V4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 11h4v2H6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.467 8.413a.75.75 0 0 1 .245.824L6.79 12l.92 2.763a.75.75 0 0 1-1.092.883l-5-2.95a.75.75 0 0 1-.01-1.285l5-3.051a.75.75 0 0 1 .858.053M16.533 8.413a.75.75 0 0 1 .858-.053l5 3.05a.75.75 0 0 1-.01 1.287l-5 2.949a.75.75 0 0 1-1.093-.883L17.21 12l-.92-2.763a.75.75 0 0 1 .244-.824"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 11h4v2h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HorizontalResize;
