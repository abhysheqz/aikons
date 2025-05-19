import React from "react";
const LetterSpacing: React.FC<
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
        d="M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M21 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M11.985 5a1 1 0 0 1 .923.615l5.013 12a1 1 0 1 1-1.846.77L14.452 14.5H9.537l-1.613 3.884a1 1 0 1 1-1.847-.768l4.985-12A1 1 0 0 1 11.985 5m-1.617 7.5h3.249l-1.629-3.9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LetterSpacing;
