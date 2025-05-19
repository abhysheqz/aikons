import React from "react";
const Jpg_02: React.FC<
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
        d="M10.5 13.25a.75.75 0 0 1 .75.75v3.25a2.5 2.5 0 0 1-2.5 2.5h-.083a2.417 2.417 0 0 1-2.417-2.417.75.75 0 0 1 1.5 0c0 .507.41.917.917.917h.083a1 1 0 0 0 1-1V14a.75.75 0 0 1 .75-.75m1.25.75a.75.75 0 0 1 .75-.75H14a2.25 2.25 0 0 1 0 4.5h-.75V19a.75.75 0 0 1-1.5 0zm1.5 2.25H14a.75.75 0 0 0 0-1.5h-.75zm3.5-2.25a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-.25h-2v3.5h2v-.5H20a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H8.667A3.667 3.667 0 0 1 5 17.333a2 2 0 0 1 3.5-1.323V14a2 2 0 0 1 2-2h9.25V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Jpg_02;
