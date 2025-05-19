import React from "react";
const Calling: React.FC<
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
        d="M5.082 11.746a21.5 21.5 0 0 0 3.165 4.006 21.5 21.5 0 0 0 4.006 3.165l3.578-3.838 6.918 3.94c-1.004 1.864-3.412 4.248-6.471 3.632-1.446-.292-2.873-.778-4.598-1.768a23.3 23.3 0 0 1-4.833-3.726 23.3 23.3 0 0 1-3.73-4.838c-.99-1.725-1.477-3.152-1.769-4.597C.732 4.662 3.116 2.254 4.98 1.25l3.94 6.918z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.828 9.834a9.78 9.78 0 0 0-6.663-6.662l.555-1.922a11.78 11.78 0 0 1 8.03 8.03zm-4.792.768a5 5 0 0 0-2.639-2.639l.782-1.84a7 7 0 0 1 3.698 3.697z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Calling;
