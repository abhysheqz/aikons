import React from "react";
const EcoLab_02: React.FC<
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
        d="M10 1.25a2.75 2.75 0 0 1 2.442 1.484c.443-.305.98-.484 1.558-.484h2.75V4A2.75 2.75 0 0 1 14 6.75h-1.25v1.5h2.5v1.5h-1v1.957a5.751 5.751 0 1 1-4.5 0V9.75h-1v-1.5h2.5v-2.5H10A2.75 2.75 0 0 1 7.25 3V1.25zm1.25 8.5v3.03l-.524.164A4.26 4.26 0 0 0 7.869 16h8.264a4.26 4.26 0 0 0-2.857-3.056l-.525-.165V9.75H11.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EcoLab_02;
