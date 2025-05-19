import React from "react";
const Redo: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12a9 9 0 1 1-1.383-4.797m1.09-4.202-.173 2.054c-.124 1.479-.186 2.218-.668 2.634s-1.193.343-2.615.197l-2.044-.21"
      />
    </svg>
  );
};
export default Redo;
