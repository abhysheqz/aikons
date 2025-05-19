import React from "react";
const Building_06: React.FC<
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
        d="M16.03 21H20V10.005a1 1 0 0 0-1-1h-2.97zm0-13.995V4a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v18a1 1 0 0 0 1 1h3.25v-6c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v6H21a1 1 0 0 0 1-1V10.005a3 3 0 0 0-3-3zM10.25 23v-6a.25.25 0 0 0-.25-.25H8a.25.25 0 0 0-.25.25v6zM6.75 6.01a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m4.5 2.985a.75.75 0 0 1-.745.755l-3 .02a.75.75 0 1 1-.01-1.5l3-.02a.75.75 0 0 1 .755.745m-4.5 3.015a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_06;
