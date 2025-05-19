import React from "react";
const Pen_02: React.FC<
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
        d="m21.998 5.565-3.56-3.561-2.436 2.436L16 4.437l-1.061 1.061 4.5 4.5-3 3 1.06 1.06 4.061-4.06L19.562 8zm-4.381 4.38-3.56-3.56-5.555 5.555 3.56 3.56zM3.332 17.11 7.441 13l3.56 3.56-4.108 4.11L2 22.004z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pen_02;
