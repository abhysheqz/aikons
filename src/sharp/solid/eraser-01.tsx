import React from "react";
const Eraser_01: React.FC<
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
        d="M1.25 4A.75.75 0 0 1 2 3.25h15.416l5.22 8.353a.75.75 0 0 1 0 .795l-5.22 8.352H2a.75.75 0 0 1-.75-.75zm11.043 4.293L10 10.586 7.707 8.293 6.293 9.708 8.586 12l-2.293 2.293 1.414 1.414L10 13.414l2.293 2.293 1.414-1.414L11.414 12l2.293-2.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Eraser_01;
