import React from "react";
const CashbackPound: React.FC<
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
        d="m3.333 5.64-.136-1.09a.977.977 0 1 0-1.94.242l.49 3.909a.977.977 0 0 0 1.206.827l3.91-.978a.977.977 0 0 0-.475-1.896l-1.675.419A8.795 8.795 0 1 1 3.205 12a.977.977 0 0 0-1.955 0c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25c-3.558 0-6.71 1.728-8.667 4.39"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 8a1.5 1.5 0 0 0 0 3H14a1 1 0 1 1 0 2h-.858a9.1 9.1 0 0 1-1.415 2h1.859c.64 0 1.254-.254 1.707-.707a1 1 0 0 1 1.414 1.414A4.41 4.41 0 0 1 13.586 17H9a1 1 0 0 1-.515-1.857l.013-.009.065-.04q.09-.06.26-.18c.224-.16.536-.402.876-.714a8.6 8.6 0 0 0 1.092-1.2H9a1 1 0 1 1 0-2h.337A3.5 3.5 0 1 1 16 9.5a1 1 0 1 1-2 0A1.5 1.5 0 0 0 12.5 8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CashbackPound;
