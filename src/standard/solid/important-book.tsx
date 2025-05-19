import React from "react";
const ImportantBook: React.FC<
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
        d="M1 5.75a1 1 0 0 1 1-1h2.5a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 1a2.75 2.75 0 0 0-2.75 2.75v16A2.75 2.75 0 0 0 7 22.5h13a2.75 2.75 0 0 0 2.75-2.75v-16A2.75 2.75 0 0 0 20 1zm6.5 15.75a5 5 0 1 0-5-5c0 1.709 1.146 3.586 2.63 4.4.848.466 1.722.6 2.37.6m0-7.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 13.5 9m-.75 4.75a.75.75 0 0 1 .75-.75h.009a.75.75 0 0 1 0 1.5H13.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImportantBook;
