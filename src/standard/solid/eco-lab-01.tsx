import React from "react";
const EcoLab_01: React.FC<
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
        d="M10 1.25a2.75 2.75 0 0 1 2.442 1.484c.443-.305.98-.484 1.558-.484h2a.75.75 0 0 1 .75.75v1A2.75 2.75 0 0 1 14 6.75h-1.25v1.5H16a.75.75 0 0 1 0 1.5h-.25V19a3.75 3.75 0 1 1-7.5 0V9.75H8a.75.75 0 0 1 0-1.5h3.25v-2.5H10A2.75 2.75 0 0 1 7.25 3V2A.75.75 0 0 1 8 1.25zm2 8.5H9.75V14h4.5V9.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EcoLab_01;
