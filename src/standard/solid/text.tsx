import React from "react";
const Text: React.FC<
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
        d="M6 2a2 2 0 0 0-2 2v1.5a1 1 0 0 0 2 0V4h5v16H9.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H13V4h5v1.5a1 1 0 1 0 2 0V4a2 2 0 0 0-2-2z"
      />
    </svg>
  );
};
export default Text;
