import React from "react";
const Router_01: React.FC<
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
        d="M1.25 15A2.75 2.75 0 0 1 4 12.25h16A2.75 2.75 0 0 1 22.75 15v4A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19zM13 17a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H14a1 1 0 0 1-1-1m3.991 0a1 1 0 0 1 1-1H18a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1M6 16a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.995 1c-1.73 0-3.32.64-4.626 1.702a1 1 0 0 0 1.262 1.551C9.623 3.447 10.777 3 11.995 3c1.222 0 2.379.45 3.373 1.261a1 1 0 0 0 1.265-1.549C15.324 1.644 13.729 1 11.995 1"
      />
      <path
        fill="currentColor"
        d="M11.995 4.36c-.98 0-1.898.288-2.697.784a1 1 0 1 0 1.054 1.7 3.1 3.1 0 0 1 1.643-.483c.581 0 1.14.17 1.65.488a1 1 0 1 0 1.058-1.698 5.1 5.1 0 0 0-2.708-.79M12 8a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2z"
      />
    </svg>
  );
};
export default Router_01;
