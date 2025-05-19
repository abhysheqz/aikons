import React from "react";
const CameraNightMode_02: React.FC<
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
        d="M7.56 3.447A1.75 1.75 0 0 1 9.22 2.25h5.56a1.75 1.75 0 0 1 1.66 1.197l.6 1.803H20A2.75 2.75 0 0 1 22.75 8v11A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19V8A2.75 2.75 0 0 1 4 5.25h2.96zM11 6a1 1 0 1 1 1 1 1 1 0 0 1-1-1m1.152 4.275a.75.75 0 0 0-.832-1.013c-2.018.366-3.57 2.098-3.57 4.208 0 2.382 1.974 4.28 4.37 4.28 1.851 0 3.444-1.13 4.078-2.741a.75.75 0 0 0-.832-1.013 3 3 0 0 1-.532.048c-1.602 0-2.87-1.262-2.87-2.78 0-.35.067-.683.188-.99"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraNightMode_02;
