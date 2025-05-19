import React from "react";
const Envato: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.498 8c-.362 4.042 1.5 6.5 1.5 6.5.337-5.138 4.048-11.5 11-12.5 2 3 3.023 6.513 3.004 9.5-.04 5.882-3.846 10.5-9.504 10.5-4.675 0-8.453-4.124-8.5-8.5-.02-1.906 1-4 2.5-5.5Z"
      />
    </svg>
  );
};
export default Envato;
