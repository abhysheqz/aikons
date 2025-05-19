import React from "react";
const CursorDisabled_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12.172 8.828a4 4 0 0 0 5.656-5.656m-5.656 5.656a4 4 0 0 1 5.656-5.656m-5.656 5.656 5.656-5.656"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.367 12.055 19 13.5l-6.23.898 2.618 6.48L12.61 22l-2.618-6.48L5 19.5 6 2l2.701 2.39"
      />
    </svg>
  );
};
export default CursorDisabled_01;
