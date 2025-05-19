import React from "react";
const MoneyNotFound_02: React.FC<
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
        d="M2.543 2.543a1 1 0 0 1 1.414 0l17.5 17.5a1 1 0 0 1-1.414 1.414l-17.5-17.5a1 1 0 0 1 0-1.414"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.068 9.706a3 3 0 1 0 4.226 4.226l5.812 5.812q-.053.004-.106.006H4A2.75 2.75 0 0 1 1.25 17V7A2.75 2.75 0 0 1 4 4.25h.611zM5.5 11a1 1 0 1 0 0 2h.01l.102-.005a1 1 0 0 0 0-1.99L5.51 11zM20 4.25A2.75 2.75 0 0 1 22.75 7v10c0 .623-.21 1.194-.56 1.655l-7.25-7.25a3 3 0 0 0-2.346-2.346L7.785 4.25zM18.5 11a1 1 0 1 0 0 2h.01l.102-.005a1 1 0 0 0 0-1.99L18.51 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneyNotFound_02;
