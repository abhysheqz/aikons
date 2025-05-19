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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 19v3M7 19v3M20 17V5.263c0-1.34-.89-2.511-2.209-2.745A33.7 33.7 0 0 0 12 2c-2.305 0-4.347.262-5.791.518C4.889 2.752 4 3.923 4 5.263V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M7 16h1M16 16h1M2 8v2m20-2v2M4.5 5h15M4.5 13h15M12 13V5"
      />
    </svg>
  );
};
export default SchoolBus;
