import React from "react";
const CenterFocus: React.FC<
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
        d="M4.5 1.5H9a1 1 0 1 1 0 2H4.5a1 1 0 0 0-1 1V8a1 1 0 0 1-2 0V4.5a3 3 0 0 1 3-3m15 2H15a1 1 0 1 1 0-2h4.5a3 3 0 0 1 3 3V8a1 1 0 1 1-2 0V4.5a1 1 0 0 0-1-1M2.501 15a1 1 0 0 1 1 1v3.5a1 1 0 0 0 1 1H9a1 1 0 1 1 0 2H4.5a3 3 0 0 1-3-3V16a1 1 0 0 1 1-1M21.5 15a1 1 0 0 1 1 1v3.5a3 3 0 0 1-3 3H15a1 1 0 1 1 0-2h4.5a1 1 0 0 0 1-1V16a1 1 0 0 1 1-1M7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CenterFocus;
