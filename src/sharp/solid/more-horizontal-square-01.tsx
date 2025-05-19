import React from "react";
const MoreHorizontalSquare_01: React.FC<
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
        d="M9 9h6v6H9zm2 2v2h2v-2zM1 9h6v6H1zm2 2v2h2v-2zM17 9h6v6h-6zm2 2v2h2v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreHorizontalSquare_01;
