import React from "react";
const Taxes: React.FC<
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
        d="M11.665 1.33a.75.75 0 0 1 .67 0l10 5a.75.75 0 0 1 .415.67v2.75H1.25V7a.75.75 0 0 1 .415-.67zM1.25 19.5a.75.75 0 0 1 .75-.75h9v4H2a.75.75 0 0 1-.75-.75zM8.75 11.25h-5.5v6h5.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m13.793 20.793 7-7 1.414 1.414-7 7zM13.75 15.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M19.25 20.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Taxes;
