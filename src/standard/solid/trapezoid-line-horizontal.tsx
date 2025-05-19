import React from "react";
const TrapezoidLineHorizontal: React.FC<
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
        d="M1 11.75a1 1 0 0 0 1 1h2.25v-2H2a1 1 0 0 0-1 1M19.75 10.75H4.25V8.087c0-1.359 1.023-2.484 2.364-2.67l10-1.39c1.632-.227 3.136 1.006 3.136 2.67zM19.75 12.75H22a1 1 0 1 0 0-2h-2.25zM19.75 12.75v4.053c0 1.663-1.504 2.897-3.136 2.67l-9.999-1.39c-1.34-.186-2.363-1.311-2.364-2.669V12.75z"
      />
    </svg>
  );
};
export default TrapezoidLineHorizontal;
