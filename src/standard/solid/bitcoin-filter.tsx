import React from "react";
const BitcoinFilter: React.FC<
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
        d="M12.5 1.75a.75.75 0 0 0-1.5 0V2H9.25a.75.75 0 0 0 0 1.5h.25V9h-.25a.75.75 0 0 0 0 1.5H11v.25a.75.75 0 0 0 1.5 0v-.25a2.5 2.5 0 0 0 1.785-4.25A2.5 2.5 0 0 0 12.5 2zM11 5.5v-2h1.5a1 1 0 1 1 0 2zM11 9V7h1.5a1 1 0 1 1 0 2zm5.098-2.75q.06-.123.111-.25h4.541a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.241.551L15 16.078v3.672a.75.75 0 0 1-.472.696l-5 2A.75.75 0 0 1 8.5 21.75v-5.672l-6.259-5.777A.75.75 0 0 1 2 9.75v-3A.75.75 0 0 1 2.75 6H8v1.879A2.25 2.25 0 0 0 9.25 12h.629a2.25 2.25 0 0 0 3.86-.195 4.002 4.002 0 0 0 2.359-5.555"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinFilter;
