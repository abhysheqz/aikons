import React from "react";
const SchoolBus: React.FC<
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
        d="M17 19v3M7 19v3M20 19V2H4v17zM7 16h2M15 16h2M2 7v3M22 7v3M4.5 5h15M4.5 13h15M12 13V5"
      />
    </svg>
  );
};
export default SchoolBus;
