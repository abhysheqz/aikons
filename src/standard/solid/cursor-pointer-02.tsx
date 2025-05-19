import React from "react";
const CursorPointer_02: React.FC<
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
        d="M9.323 10.72c-.336-.875.522-1.733 1.396-1.397l11.338 4.36c.947.364.916 1.714-.046 2.034l-4.72 1.574-1.574 4.72c-.32.962-1.67.992-2.033.046z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 5.75a2.75 2.75 0 0 0-1.417 5.108.75.75 0 0 1-.774 1.284 4.25 4.25 0 1 1 5.833-5.833.75.75 0 1 1-1.284.774A2.75 2.75 0 0 0 8.5 5.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.507 2.75a5.757 5.757 0 0 0-.37 11.502.75.75 0 0 1-.096 1.496A7.257 7.257 0 1 1 15.75 8.04a.75.75 0 1 1-1.498.095A5.757 5.757 0 0 0 8.508 2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorPointer_02;
