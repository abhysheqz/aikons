import React from "react";
const ArrowDown_02: React.FC<
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
        d="M12.003 21q.214-.002.4-.084zM12.402 20.916a1 1 0 0 0 .31-.214l4.995-4.995a1 1 0 0 0-1.414-1.414L13 17.586V4a1 1 0 1 0-2 0v13.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l5 5A1 1 0 0 0 12 21"
      />
    </svg>
  );
};
export default ArrowDown_02;
