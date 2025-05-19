import React from "react";
const MoneyNotFound_01: React.FC<
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
        d="M5.75 5.748h-3v3.18a4 4 0 0 0 3.146-3.034l3.983 3.983a3 3 0 1 0 4.242 4.242l5.629 5.629H1.25v-15.5h3zm-3 12.5h3.18a4 4 0 0 0-3.18-3.18zM22.75 19.213l-1.5-1.5v-2.645a4 4 0 0 0-1.797.848L7.785 4.248H22.75zM18.07 5.748a4 4 0 0 0 3.18 3.18v-3.18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m22.25 20.835-1.414 1.414L1.75 3.163 3.164 1.75z"
      />
    </svg>
  );
};
export default MoneyNotFound_01;
