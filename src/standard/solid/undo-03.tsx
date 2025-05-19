import React from "react";
const Undo_03: React.FC<
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
        d="M7.707 4.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L5.414 9H15a5 5 0 0 1 0 10h-4a1 1 0 1 0 0 2h4a7 7 0 1 0 0-14H5.414z"
      />
    </svg>
  );
};
export default Undo_03;
