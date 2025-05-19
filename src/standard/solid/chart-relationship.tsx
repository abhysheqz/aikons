import React from "react";
const ChartRelationship: React.FC<
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
        d="M16.999 5h-8.01a1 1 0 1 1 0-2h8.01a1 1 0 1 1 0 2M7.414 7.413a1 1 0 0 1 1.414 0l5.378 5.38a1 1 0 0 1-1.415 1.414l-5.377-5.38a1 1 0 0 1 0-1.414M4 8.007a1 1 0 0 1 1 1V17a1 1 0 1 1-2 0V9.007a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 19a3 3 0 1 1 6 0 3 3 0 0 1-6 0M12 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0M16 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartRelationship;
