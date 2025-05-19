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
        strokeWidth={1.5}
        d="M21 22V10l-3.5 1v11M3 22V10l3.5 1v11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 22V8h6v14M1 22h22M9 8 7 2h10l-2 6"
      />
    </svg>
  );
};
export default CentralShaheedMinar;
