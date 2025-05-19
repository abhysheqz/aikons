import React from "react";
const Move_02: React.FC<
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
        d="M6.255 5.75a2.5 2.5 0 0 1 5 0v5H15a3.75 3.75 0 0 1 3.75 3.75V19A3.75 3.75 0 0 1 15 22.75H8.07a2.75 2.75 0 0 1-2.288-1.224l-3.999-5.995a2.49 2.49 0 0 1 3.576-3.43l.896.768zM18.001 1.25c.2 0 .39.08.53.22l1 1a.75.75 0 0 1-.78 1.238v1.536l1.54.003a.75.75 0 0 1 1.24-.777l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.237-.783l-1.543-.003v1.548a.75.75 0 0 1 .78 1.238l-1 1a.75.75 0 0 1-1.06 0l-1.001-1a.75.75 0 0 1 .78-1.237V6.744l-1.544.003a.75.75 0 0 1-1.236.783l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.238.777l1.543-.003V3.707a.75.75 0 0 1-.781-1.238l1-1a.75.75 0 0 1 .531-.219"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Move_02;
