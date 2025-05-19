import React from "react";
const HandPointingRight_01: React.FC<
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
        d="M9.453 3.784a2.53 2.53 0 0 1 3.101-.007 2.4 2.4 0 0 1 .337 3.503l-.022.025-.993.945h8.374a2.5 2.5 0 0 1 0 5h-4.998c-.063 1.864-.638 4.57-2.685 6.603-.942.936-2.32.992-3.46.82-1.177-.175-2.343-.626-3.12-.998l-1.454-.697-.7-.336H1.25V8.102h2.5z"
      />
    </svg>
  );
};
export default HandPointingRight_01;
