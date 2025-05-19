import React from "react";
const SortingDown: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 15.5h12M3 11.5h18M8 2.5v6m0 0-2-2m2 2 2-2M12 15.5v6m0 0-2-2m2 2 2-2M16 2.5v6m0 0-2-2m2 2 2-2"
      />
    </svg>
  );
};
export default SortingDown;
