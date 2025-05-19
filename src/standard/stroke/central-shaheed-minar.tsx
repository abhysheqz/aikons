import React from "react";
const CentralShaheedMinar: React.FC<
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
        d="M21 21V9l-3.5 1v11M3 21V9l3.5 1v11M9 21V8h6v13M2 21h20M9 8 7 3h10l-2 5"
      />
    </svg>
  );
};
export default CentralShaheedMinar;
