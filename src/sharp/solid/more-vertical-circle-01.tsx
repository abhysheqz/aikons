import React from "react";
const MoreVerticalCircle_01: React.FC<
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
        d="M12 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M9 4a3 3 0 1 0 6 0 3 3 0 0 0-6 0M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 0 6 0 3 3 0 0 0-6 0M12 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreVerticalCircle_01;
