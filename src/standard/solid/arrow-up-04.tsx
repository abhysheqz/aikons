import React from "react";
const ArrowUp_04: React.FC<
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
        d="M12 9a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a1 1 0 0 1 .832.445l4 6A1 1 0 0 1 16 11H8a1 1 0 0 1-.832-1.555l4-6A1 1 0 0 1 12 3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUp_04;
