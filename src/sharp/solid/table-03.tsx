import React from "react";
const Table_03: React.FC<
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
        d="M18.5 16.912h-13v-2h13z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5.5h1.008a6.9 6.9 0 0 0 .765 2.862l.549 1.054c.836 1.606.905 3.612.174 5.295l-1.12 2.582A4.6 4.6 0 0 0 3 19.123V20.5h2v-1.378c0-.363.074-.718.21-1.033l1.121-2.582a8.1 8.1 0 0 0 .609-2.257h10.12c.094.775.297 1.537.609 2.257l1.12 2.582c.137.316.211.67.211 1.033V20.5h2v-1.378c0-.63-.127-1.256-.376-1.83l-1.12-2.581c-.73-1.683-.662-3.689.174-5.295l.55-1.054a6.9 6.9 0 0 0 .764-2.862H22v-2H2zm6.875 2.416 1 1.5a.75.75 0 0 0 .624.334h3a.75.75 0 0 0 .624-.334l1-1.5-1.248-.832-.777 1.166H10.9l-.777-1.166z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Table_03;
