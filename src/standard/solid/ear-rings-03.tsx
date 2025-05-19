import React from "react";
const EarRings_03: React.FC<
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
      viewBox="0 0 25 25"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.218 10.75h3.887a4.752 4.752 0 0 0 9.395-1 4.75 4.75 0 0 0-9.395-1h-3.887l-2.2-2.64a1 1 0 0 0-1.475-.067l-.5.5a1 1 0 0 0 1.091 1.63l.481.577H6.25a1 1 0 1 0 0 2h2.365l-.48.577a1 1 0 0 0-1.092 1.63l.5.5a1 1 0 0 0 1.475-.067zM9.75 15a4.75 4.75 0 1 0 4.645 5.75h3.887l2.2 2.64a1 1 0 0 0 1.475.067l.5-.5a1 1 0 0 0-1.091-1.63l-.481-.577h2.365a1 1 0 1 0 0-2h-2.365l.48-.577a1 1 0 0 0 1.092-1.63l-.5-.5a1 1 0 0 0-1.475.067l-2.2 2.64h-3.887A4.75 4.75 0 0 0 9.75 15"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EarRings_03;
