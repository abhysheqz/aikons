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
        fillRule="evenodd"
        d="M17 2.586 22.414 8 17 13.414 15.586 12l3-3H9a5 5 0 1 0 0 10h5v2H9A7 7 0 0 1 9 7h9.586l-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Redo_03;
