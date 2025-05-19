import React from "react";
const GridOff: React.FC<
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
      <path fill="currentColor" d="M6 7h2v15H6z" />
      <path fill="currentColor" d="M17 16v2H2v-2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.414 2 22 20.586 20.586 22 2 3.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 17h2v5h-2zm0-9h-5V6h5V2h2v4h4v2h-4v5h-2zM7 6v2H2V6z"
      />
    </svg>
  );
};
export default GridOff;
