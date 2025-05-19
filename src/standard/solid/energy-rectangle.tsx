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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM13.75 6a.75.75 0 0 0-1.345-.457l-5 6.5A.75.75 0 0 0 8 13.25h2.25V18a.75.75 0 0 0 1.344.457l5-6.5A.75.75 0 0 0 16 10.75h-2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EnergyRectangle;
