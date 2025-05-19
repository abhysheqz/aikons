import React from "react";
const Navigation_01: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .643.364l3 5a.75.75 0 0 1-.88 1.098L12 6.79l-2.763.92a.75.75 0 0 1-.88-1.097l3-5A.75.75 0 0 1 12 1.25M12 22.75a.75.75 0 0 0 .643-.364l3-5a.75.75 0 0 0-.88-1.098L12 17.21l-2.763-.92a.75.75 0 0 0-.88 1.097l3 5a.75.75 0 0 0 .643.364M7.47 8.415a.75.75 0 0 1 .242.822L6.79 12l.92 2.763a.75.75 0 0 1-1.097.88l-5-3a.75.75 0 0 1 0-1.286l5-3a.75.75 0 0 1 .855.058M16.53 8.415a.75.75 0 0 1 .856-.058l5 3a.75.75 0 0 1 0 1.286l-5 3a.75.75 0 0 1-1.098-.88L17.21 12l-.92-2.763a.75.75 0 0 1 .242-.822M9.25 12.01a2.751 2.751 0 1 1 5.502-.002 2.751 2.751 0 0 1-5.502.002"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigation_01;
