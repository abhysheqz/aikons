import React from "react";
const Crown_02: React.FC<
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
        d="M4 20.25a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 2.75a.75.75 0 0 1 .67.415L15.4 8.62a.75.75 0 0 1-.194.914 1.25 1.25 0 1 0 1.996.619.75.75 0 0 1 .335-.85l4.077-2.447a.75.75 0 0 1 1.104.859l-3 10a.75.75 0 0 1-.718.534H5a.75.75 0 0 1-.718-.535l-3-10a.75.75 0 0 1 1.104-.858l4.077 2.446a.75.75 0 0 1 .335.85A1.25 1.25 0 0 0 8 11.75a1.25 1.25 0 0 0 .795-2.215.75.75 0 0 1-.194-.914l2.728-5.456A.75.75 0 0 1 12 2.75"
      />
    </svg>
  );
};
export default Crown_02;
