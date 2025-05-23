import React from "react";
const YogaMat: React.FC<
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
        d="M11.22 15.61a3.43 3.43 0 0 1-2.64 1.234c-1.89 0-3.42-1.518-3.42-3.39h1.954a1.46 1.46 0 0 0 1.466 1.452c.475 0 .898-.223 1.167-.575.193-.25.25-.704.038-1.21a3.42 3.42 0 0 0-3.16-2.09c-1.89 0-3.42 1.518-3.42 3.39 0 1.874 1.53 3.392 3.42 3.392h7.004l5.212-3.875h-.977V12h3.909c.42 0 .794.267.927.662a.96.96 0 0 1-.341 1.082l-7.818 5.812a1 1 0 0 1-.587.194H6.626c-2.969 0-5.375-2.386-5.375-5.328 0-1.84.94-3.462 2.37-4.419l-.002-.004 6.916-4.847.013-.008a5.46 5.46 0 0 1 3.005-.894 5.43 5.43 0 0 1 4.837 2.928c.304.612.407 1.264.436 1.833.008.152.012.293.014.394l.002.664z"
      />
    </svg>
  );
};
export default YogaMat;
