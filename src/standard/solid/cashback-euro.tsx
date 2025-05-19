import React from "react";
const CashbackEuro: React.FC<
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
        d="M10.035 11.5a3.5 3.5 0 0 0 0 1H12.5a1 1 0 1 1 0 2h-1.45c.632.619 1.496 1 2.45 1 .72 0 1.388-.217 1.944-.589a1 1 0 0 1 1.112 1.662A5.5 5.5 0 0 1 8.6 14.5H7.5a1 1 0 1 1 0-2h.522a5.6 5.6 0 0 1 0-1H7.5a1 1 0 1 1 0-2h1.1a5.5 5.5 0 0 1 7.956-2.073 1 1 0 0 1-1.112 1.662A3.5 3.5 0 0 0 13.5 8.5c-.954 0-1.818.381-2.45 1h1.45a1 1 0 1 1 0 2z"
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
export default CashbackEuro;
