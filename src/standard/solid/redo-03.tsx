import React from "react";
const Redo_03: React.FC<
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
        d="M17.707 3.293a1 1 0 1 0-1.414 1.414L18.586 7H9a7 7 0 1 0 0 14h4a1 1 0 1 0 0-2H9A5 5 0 0 1 9 9h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z"
      />
    </svg>
  );
};
export default Redo_03;
