import React from "react";
const Table: React.FC<
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
        d="M6.25 2.5A3.75 3.75 0 0 0 2.5 6.25V8H23V6.25a3.75 3.75 0 0 0-3.75-3.75zM23 9.5h-9.5V13H23zM23 14.5h-9.5V18H23zM22.992 19.5H13.5V23h5.75a3.75 3.75 0 0 0 3.742-3.5M12 18v-3.5H2.5V18zM2.508 19.5H12V23H6.25a3.75 3.75 0 0 1-3.742-3.5M2.5 13H12V9.5H2.5z"
      />
    </svg>
  );
};
export default Table;
