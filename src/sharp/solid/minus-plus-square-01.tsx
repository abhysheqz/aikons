import React from "react";
const MinusPlusSquare_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM11 17v-2.182H8.5v-2H11v-2.182h2v2.182h2.5v2H13V17zm4.5-8h-7V7h7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinusPlusSquare_01;
