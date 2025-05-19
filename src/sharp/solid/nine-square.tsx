import React from "react";
const NineSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.747 1.75h-20.5v20.5h20.5zM10.497 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm4 6.5v-2.67c-.313.11-.65.17-1 .17h-2a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NineSquare;
