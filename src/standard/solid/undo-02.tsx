import React from "react";
const Undo_02: React.FC<
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
        d="M4 3a1 1 0 0 0-2 0v6a1 1 0 0 0 1.164.986l6-1a1 1 0 1 0-.328-1.972l-3.52.586A8 8 0 1 1 12 20a1 1 0 1 0 0 2c5.523 0 10-4.477 10-10S17.522 2 12 2A9.99 9.99 0 0 0 4 5.998z"
      />
    </svg>
  );
};
export default Undo_02;
