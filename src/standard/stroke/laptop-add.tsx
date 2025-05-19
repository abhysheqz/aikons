import React from "react";
const LaptopAdd: React.FC<
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
        d="M22.5 20.5h-21l2-4h17zM20.5 16.5V5A1.5 1.5 0 0 0 19 3.5H5A1.5 1.5 0 0 0 3.5 5v11.5M9.5 10H12m0 0h2.5M12 10V7.5m0 2.5v2.5"
      />
    </svg>
  );
};
export default LaptopAdd;
