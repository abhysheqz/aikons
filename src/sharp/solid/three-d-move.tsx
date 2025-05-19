import React from "react";
const ThreeDMove: React.FC<
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
        d="m13 13.526 5.134 4.2-1.267 1.548L12 15.292l-4.866 3.982-1.267-1.548 5.133-4.2V8h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 2.25a.75.75 0 0 1 .644.364l3 5A.75.75 0 0 1 15 8.75H9a.75.75 0 0 1-.643-1.136l3-5a.75.75 0 0 1 .644-.364M19 15.25a.75.75 0 0 1 .644.364l3 5A.75.75 0 0 1 22 21.75H16a.75.75 0 0 1-.643-1.136l3-5a.75.75 0 0 1 .644-.364M5 15.25a.75.75 0 0 1 .644.364l3 5A.75.75 0 0 1 8 21.75H2a.75.75 0 0 1-.643-1.136l3-5a.75.75 0 0 1 .644-.364"
      />
    </svg>
  );
};
export default ThreeDMove;
