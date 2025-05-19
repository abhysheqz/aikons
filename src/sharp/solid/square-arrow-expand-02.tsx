import React from "react";
const SquareArrowExpand_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm7.999 4H6.25v4.749h1.5V8.81l2.719 2.718 1.06-1.06L8.811 7.75h2.188zm1.472 7.281 2.718 2.719h-2.188v1.5h4.749v-4.749h-1.5v2.188l-2.719-2.718z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowExpand_02;
