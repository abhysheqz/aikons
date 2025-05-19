import React from "react";
const CreditCardPos: React.FC<
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
        d="m12.487 16.627 1.543-1.543-1.06-1.06-1.544 1.543zm2.837-2.836 2.206-2.206-1.06-1.061-2.207 2.206zM6.03 16.442l10.5-10.5-1.06-1.06-10.5 10.5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 2 9 9-11 11-9-9zM4 22h16"
      />
    </svg>
  );
};
export default CreditCardPos;
