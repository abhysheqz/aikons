import React from "react";
const Knife_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.387 2.827a1.25 1.25 0 0 0-1.776.009L2.517 17.202h-.001a2.673 2.673 0 0 0-.085 3.656 2.668 2.668 0 0 0 4.009-.034l.002-.002 3.426-4.012a.25.25 0 0 1 .367-.014l2.235 2.235a.75.75 0 0 0 1.086-.027l9.5-10.5a.75.75 0 0 0-.026-1.034zM18.5 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Knife_01;
