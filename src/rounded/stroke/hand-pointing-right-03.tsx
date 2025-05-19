import React from "react";
const HandPointingRight_03: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 11.5v1a2 2 0 0 1-2 2m0 0h-1m1 0a1 1 0 0 1 1 1 2 2 0 0 1-2 2m0 0h-1m1 0c.524 0 .922.47.836.987l-.058.342a2 2 0 0 1-1.972 1.671h-1.473c-2.173 0-3.26 0-4.125-.331-.502-.192-1.142-.699-1.604-1.104a2.2 2.2 0 0 0-1.44-.565H2m12-7h6.5a1.5 1.5 0 0 0 0-3h-9.962l1.625-1.62a1.683 1.683 0 0 0-.14-2.51 1.696 1.696 0 0 0-2.072-.033l-4.598 3.6C4.473 8.626 3.117 9 2 9"
      />
    </svg>
  );
};
export default HandPointingRight_03;
