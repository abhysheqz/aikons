import React from "react";
const Sword_03: React.FC<
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
        d="m9.384 16.217 1.054 1.054-1.053 1.053-1.828-1.827-2.055 2.055a2.236 2.236 0 1 1-1.054-1.054l2.055-2.055-1.828-1.828 1.054-1.053 1.044 1.044 9.242-10.68 4.735-.676-.677 4.735zM12.956 14.784l1.66 1.433-1.054 1.054 1.053 1.054 1.828-1.828 2.055 2.055a2.236 2.236 0 1 0 1.054-1.054l-2.055-2.055 1.828-1.827-1.054-1.054-1.044 1.045-1.244-1.437zM11.174 6.611 7.985 2.926 3.25 2.25l.676 4.735 3.963 3.422z"
      />
    </svg>
  );
};
export default Sword_03;
