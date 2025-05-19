import React from "react";
const ArrowLeftRight: React.FC<
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
        d="M20 6H6.828l2.586-2.586L8 2 3 7l5 5 1.414-1.414L6.828 8H20zM21 17l-5-5-1.414 1.414L17.172 16H4v2h13.172l-2.586 2.586L16 22z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowLeftRight;
