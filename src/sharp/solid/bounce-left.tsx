import React from "react";
const BounceLeft: React.FC<
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
        d="M8.505 10.575c1.984 2.824 3.278 7.69 3.928 10.64a1 1 0 0 0 1.873.23c.612-1.233 1.684-2.576 2.804-3.353.557-.387 1.06-.587 1.475-.624.375-.033.72.06 1.06.375L21 16.373c-.768-.709-1.675-.979-2.593-.897-.88.078-1.713.47-2.439.973-.78.54-1.51 1.263-2.131 2.044-.755-2.898-1.96-6.596-3.697-9.068z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M9 5a3 3 0 1 0-6 0 3 3 0 0 0 6 0" />
    </svg>
  );
};
export default BounceLeft;
