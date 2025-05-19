import React from "react";
const CreditCardNotFound: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336z"
      />
      <path
        fill="currentColor"
        d="M2 3.25a.75.75 0 0 0-.75.75v4.25h7l-5-5zM22.75 8.25V4a.75.75 0 0 0-.75-.75H6.786l5 5zM1.25 9.75V20c0 .414.336.75.75.75h18.75l-11-11zM22.75 19.214V9.75h-9.464z"
      />
    </svg>
  );
};
export default CreditCardNotFound;
