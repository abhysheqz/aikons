import React from "react";
const Gun: React.FC<
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
        d="M1.25 8.75v3H2c.29 0 .662.159.941.438.279.28.339.542.299.711l-1.965 7.409A.75.75 0 0 0 2 21.25h8a.75.75 0 0 0 .6-1.2l-1.281-1.708.69-2.592c.839 0 1.38-.001 1.869-.107a4.75 4.75 0 0 0 3.261-2.546c.178-.362.299-.774.446-1.347H22a.75.75 0 0 0 .75-.75V8.75H19v-1.5h3.75V3.5a.75.75 0 0 0-1.136-.643L19.292 4.25H9.96l-3.6 4.5zm12.783 3h-2.957l-.666 2.499c.606-.003.897-.017 1.152-.072a3.25 3.25 0 0 0 2.231-1.742c.084-.17.151-.365.24-.685"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M8.04 4.25H1.25v3h4.39z" />
    </svg>
  );
};
export default Gun;
