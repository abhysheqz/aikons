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
        fillRule="evenodd"
        d="M13 1.25a.75.75 0 0 1 .53.22l2.675 2.675-12.06 12.06L1.47 13.53a.75.75 0 0 1 0-1.06l11-11a.75.75 0 0 1 .53-.22M5.205 17.266l12.06-12.06 5.265 5.264a.75.75 0 0 1 0 1.06l-11 11a.75.75 0 0 1-1.06 0zm10.118-3.475 2.206-2.206-1.06-1.061-2.207 2.206zm-2.837 2.837 1.544-1.544-1.061-1.06-1.543 1.543z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 22.75H4v-2h16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CreditCardPos;
