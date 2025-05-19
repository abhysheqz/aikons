import React from "react";
const PresentationBarChart_01: React.FC<
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
        d="M5.5 1.25A3.75 3.75 0 0 0 1.75 5v10a3.75 3.75 0 0 0 3.75 3.75h13A3.75 3.75 0 0 0 22.25 15V5a3.75 3.75 0 0 0-3.75-3.75zM13 7a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-4 3a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0zm8 1a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 17a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.78 17.375a1 1 0 0 1-.155 1.406l-5 4a1 1 0 1 1-1.25-1.562l5-4a1 1 0 0 1 1.406.156M13.22 17.375a1 1 0 0 1 1.405-.156l5 4a1 1 0 1 1-1.25 1.562l-5-4a1 1 0 0 1-.156-1.406"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationBarChart_01;
