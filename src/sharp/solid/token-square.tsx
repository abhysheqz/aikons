import React from "react";
const TokenSquare: React.FC<
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
        d="M22.25 1.75H1.75v20.5h20.5zm-9.818 5.918L12 6.5l-.432 1.168a6.6 6.6 0 0 1-3.9 3.9L6.5 12l1.168.432a6.6 6.6 0 0 1 3.9 3.9L12 17.5l.432-1.168a6.6 6.6 0 0 1 3.9-3.9L17.5 12l-1.168-.432a6.6 6.6 0 0 1-3.9-3.9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TokenSquare;
