import React from "react";
const Scissor: React.FC<
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
        d="M18 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0M18 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m7.827 10.74-5.823-5 1.345-1.48 5.824 5zM2 18.263l12.324-11 1.35 1.474-3.403 3.12 3.436 3.436-1.415 1.414-3.497-3.497-7.444 6.527z"
      />
    </svg>
  );
};
export default Scissor;
