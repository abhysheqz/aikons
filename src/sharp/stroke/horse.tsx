import React from "react";
const Horse: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m19.5 4.5 2.5 4-1.5 1L19 8c-.896 0-1.717-.65-2-1.5M18.5 2l-1 1c-2 .5-3.312 1.936-3.834 3.502L13 8.5c-2.152 1.537-3.682 1.184-5.311.684-1.034-.317-2.216-.157-2.98.607A2.42 2.42 0 0 0 4 11.503V21M4.5 9.5l-.744-.372A1.213 1.213 0 0 0 2 10.213V14M17.5 7.5l-.097.146a3.1 3.1 0 0 0-.299 2.865c.259.645.323 1.352.187 2.034-.186.931-1 1.928-1.791 2.455v6M13 21v-5m0-1.5V16m-5 0s2.308 1.125 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8.5 14.5c-.5 2-2 2.5-2 2.5v4"
      />
    </svg>
  );
};
export default Horse;
