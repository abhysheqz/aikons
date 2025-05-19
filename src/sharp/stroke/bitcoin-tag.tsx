import React from "react";
const BitcoinTag: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.559 6c0-.828-.674-1.5-1.505-1.5s-1.505.672-1.505 1.5.674 1.5 1.505 1.5 1.505-.672 1.505-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m12.039 2.061-9.97 9.857a.1.1 0 0 0-.001.142L11.997 22a.1.1 0 0 0 .143 0l9.871-9.983a.1.1 0 0 0 .03-.07V2.032H12.11a.1.1 0 0 0-.071.03Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m8.62 12.819 3.832-3.858m1.184 1.093.9-.91m-5.76 5.734.97-.942m.815-3.045 2.21 2.228m0 0c.366.376.401 1.007 0 1.398l-.486.47c-.403.39-1.097.447-1.477 0l-2.855-2.84m4.817.972c.367.376 1.005.39 1.407 0l.486-.47c.402-.39.488-1.036.108-1.364l-2.98-2.986"
      />
    </svg>
  );
};
export default BitcoinTag;
