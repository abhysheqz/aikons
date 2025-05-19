import React from "react";
const MoreVerticalSquare_01: React.FC<
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
        d="M9 17h6v6H9zm2 2v2h2v-2zM9 1h6v6H9zm2 2v2h2V3zM9 9h6v6H9zm2 2v2h2v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreVerticalSquare_01;
