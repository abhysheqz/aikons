import React from "react";
const Location_07: React.FC<
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
        d="M2.25 10.926C2.25 5.61 6.725 1.25 12 1.25s9.75 4.36 9.75 9.676c0 2.713-1.15 4.995-2.763 6.878-1.608 1.876-3.701 3.389-5.668 4.592l-.012.007-.011.007a2.64 2.64 0 0 1-2.592 0l-.013-.008-.013-.008c-1.96-1.213-4.053-2.721-5.661-4.591-1.615-1.879-2.767-4.155-2.767-6.877"
      />
    </svg>
  );
};
export default Location_07;
