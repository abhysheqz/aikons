import React from "react";
const CashbackYen: React.FC<
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
        d="M8.35 6.74a1 1 0 0 1 1.41.11L12 9.462l2.24-2.614a1 1 0 1 1 1.52 1.302L13 11.37V12h1.5a1 1 0 1 1 0 2H13v2.5a1 1 0 1 1-2 0V14H9.5a1 1 0 1 1 0-2H11v-.63L8.24 8.15a1 1 0 0 1 .11-1.41"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.333 5.64-.136-1.09a.977.977 0 1 0-1.94.242l.49 3.909a.977.977 0 0 0 1.206.827l3.91-.978a.977.977 0 0 0-.475-1.896l-1.675.419A8.795 8.795 0 1 1 3.205 12a.977.977 0 0 0-1.955 0c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25c-3.558 0-6.71 1.728-8.667 4.39"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CashbackYen;
