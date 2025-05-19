import React from "react";
const MilkOat: React.FC<
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
        d="M4 3a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v1.642l2.268 2.717A1 1 0 0 1 19 8v1.5a1 1 0 1 1-2 0V9H9v12h1.5a1 1 0 0 1 0 2H4a3 3 0 0 1-3-3V8a1 1 0 0 1 .293-.707L4 4.586zm1 3.414-2 2V20a1 1 0 0 0 1 1h3V8.414zM8.414 7 6 4.586V3h8.5v1.642a2 2 0 0 0 .464 1.281l.9 1.077z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.347 5.761 7 8.414A2 2 0 0 0 8.414 9H18a1 1 0 0 0 .768-1.64L16.5 4.641V3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2.004c0 .303.134.574.347.757"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.347 14.396a8.5 8.5 0 0 0-4.231-2.263c-1.18-.236-2.498-.193-3.508.414l8.243 8.243c.612-.751 1.064-1.637 1.138-2.64.095-1.3-.46-2.57-1.642-3.754M20.79 21.85l-8.243-8.242c-.607 1.01-.65 2.329-.414 3.508a8.5 8.5 0 0 0 2.263 4.23c1.183 1.184 2.455 1.738 3.754 1.643 1.003-.074 1.889-.526 2.64-1.138"
      />
    </svg>
  );
};
export default MilkOat;
