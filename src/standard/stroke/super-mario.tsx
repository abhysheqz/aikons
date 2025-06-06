import React from "react";
const SuperMario: React.FC<
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
        d="m4 12-.771-1.928a1.83 1.83 0 0 1-.08-1.17C4.206 5.115 7.244 2 12 2s7.794 3.115 8.85 6.902c.109.387.07.797-.079 1.17L20.001 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 10a9.96 9.96 0 0 0-6-2 9.96 9.96 0 0 0-6 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 8c0-4-6-4-6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.009 13H9m6 0h-.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.999 17c.5.433 2 .866 3 0 1.001.866 2.5.433 3 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.493 14.5.5-1.5c.253-.577.819-1.001 1.498-1 1.117.002 1.577 1.04 1.5 2-.173 2.175-1.115 4-3.498 4-1.256 2.533-3.596 3.9-6.493 4-2.897-.1-5.237-1.467-6.493-4-2.383 0-3.325-1.825-3.499-4-.076-.96.384-1.998 1.5-2 .68-.001 1.246.423 1.5 1l.499 1.5"
      />
    </svg>
  );
};
export default SuperMario;
