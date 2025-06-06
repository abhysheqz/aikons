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
        d="M11.926 15.067a.75.75 0 0 0 1.061 1.06zm2.158-.037a.75.75 0 1 0-1.06-1.06zm.886-3.006a.75.75 0 0 0 1.06 1.06zm3.06-.94a.75.75 0 1 0-1.06-1.06zM4.47 15.883a.75.75 0 1 0 1.06 1.06zm12.56-10.44a.75.75 0 0 0-1.06-1.06zm-4.043 10.685 1.097-1.097-1.06-1.06-1.098 1.097zm3.043-3.043 2-2-1.06-1.06-2 2zm-10.5 3.858 11.5-11.5-1.06-1.06-11.5 11.5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.87 3.075 6.055 6.056c.767.766.767 2.009 0 2.775l-9.019 9.02a1.963 1.963 0 0 1-2.775 0l-6.056-6.057a1.963 1.963 0 0 1 0-2.775l9.019-9.02a1.963 1.963 0 0 1 2.775 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 21.5h16"
      />
    </svg>
  );
};
export default CreditCardPos;
