import React from "react";
const ArrowDiagonal: React.FC<
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
        d="M15 2h7v7h-2V5.414L5.414 20H9v2H2v-7h2v3.586L18.586 4H15z"
      />
    </svg>
  );
};
export default ArrowDiagonal;
