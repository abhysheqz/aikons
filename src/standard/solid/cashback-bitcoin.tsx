import React from "react";
const CashbackBitcoin: React.FC<
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
        d="M10.5 6a1 1 0 0 1 1 1v.5h1V7a1 1 0 1 1 2 0v.604a2.75 2.75 0 0 1 1.586 4.098A2.75 2.75 0 0 1 14.5 16.49V17a1 1 0 1 1-2 0v-.5h-1v.5a1 1 0 1 1-2 0v-.5H9a1 1 0 1 1 0-2h.5v-5H9a1 1 0 0 1 0-2h.5V7a1 1 0 0 1 1-1m1 3.5V11h2.25a.75.75 0 0 0 0-1.5zm0 3.5v1.5h2.75a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.333 5.639-.136-1.09a.977.977 0 1 0-1.94.242l.49 3.91a.977.977 0 0 0 1.206.826l3.91-.977a.977.977 0 0 0-.475-1.896l-1.675.418A8.795 8.795 0 1 1 3.205 12a.977.977 0 0 0-1.955 0c0 5.937 4.813 10.75 10.75 10.75S22.75 17.938 22.75 12 17.937 1.25 12 1.25c-3.558 0-6.71 1.729-8.667 4.39"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CashbackBitcoin;
