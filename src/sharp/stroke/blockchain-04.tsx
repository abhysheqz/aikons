import React from "react";
const Blockchain_04: React.FC<
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
        d="M21 3h-6v6h6zM9 3H3v6h6zM9 15H3v6h6zM21 15h-6v6h6zM12 6H9M15 18h-3M18 12V9M6 15v-3"
      />
    </svg>
  );
};
export default Blockchain_04;
