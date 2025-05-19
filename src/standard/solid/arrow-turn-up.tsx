import React from "react";
const ArrowTurnUp: React.FC<
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
        d="M15 3a1 1 0 0 1 .707.293l3 3A1 1 0 0 1 18 8h-2v8c0 1.464-.757 2.723-1.773 3.59-1.013.864-2.364 1.41-3.727 1.41s-2.714-.546-3.727-1.41C5.757 18.722 5 17.463 5 16v-5a1 1 0 1 1 2 0v5c0 .745.388 1.486 1.07 2.067.684.584 1.584.933 2.43.933s1.745-.35 2.43-.933C13.612 17.487 14 16.746 14 16V8h-2a1 1 0 0 1-.707-1.707l3-3A1 1 0 0 1 15 3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowTurnUp;
