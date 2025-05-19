import React from "react";
const EnergyRectangle: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM13.75 6a.75.75 0 0 0-1.345-.457l-5 6.5A.75.75 0 0 0 8 13.25h2.25V18a.75.75 0 0 0 1.344.457l5-6.5A.75.75 0 0 0 16 10.75h-2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EnergyRectangle;
