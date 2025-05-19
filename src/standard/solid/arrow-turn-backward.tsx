import React from "react";
const ArrowTurnBackward: React.FC<
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
        d="M10 6a1 1 0 0 1 1-1h5c1.464 0 2.723.757 3.59 1.773C20.453 7.786 21 9.137 21 10.5s-.546 2.714-1.41 3.727C18.723 15.243 17.463 16 16 16H8v2a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 8 12v2h8c.745 0 1.486-.388 2.067-1.07.584-.684.933-1.584.933-2.43s-.35-1.746-.933-2.43C17.487 7.388 16.746 7 16 7h-5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowTurnBackward;
