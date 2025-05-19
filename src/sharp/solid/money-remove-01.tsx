import React from "react";
const MoneyRemove_01: React.FC<
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
        d="m22.75 13.57-1.414-1.414-2 2-2-2-3.182 3.182 2 2-1.412 1.412H1.25V3.25h21.5zm-20 3.68h3.18a4 4 0 0 0-3.18-3.18zM12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-9.25-.07a4 4 0 0 0 3.18-3.18H2.75zm15.32-3.18a4 4 0 0 0 3.18 3.18V4.75z"
      />
      <path
        fill="currentColor"
        d="m22.75 15.336-2 2 2 2-1.414 1.414-2-2-2 2-1.414-1.414 2-2-2-2 1.414-1.414 2 2 2-2z"
      />
    </svg>
  );
};
export default MoneyRemove_01;
