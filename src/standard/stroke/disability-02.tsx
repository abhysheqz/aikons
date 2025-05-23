import React from "react";
const Disability_02: React.FC<
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
        d="m11.5 10-1.594-.638a1 1 0 0 0-1.29.535L7.5 12.5M14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15.5 19.483A6.07 6.07 0 0 1 10.57 22c-3.353 0-6.07-2.705-6.07-6.042 0-.875.164-1.707.5-2.458M12.649 8l-1.67 4.663A1 1 0 0 0 11.92 14h3.505a1 1 0 0 1 .864.496L19.499 20"
      />
    </svg>
  );
};
export default Disability_02;
