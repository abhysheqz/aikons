import React from "react";
const Bookshelf_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 19v3m14-3v3M3 10.5h18M3 19V2h18v17zM8 18.5V14M12 19v-5M13.5 10.5l-2-5m-4.5 5v-5m10 5v-5M16 19l1-5"
      />
    </svg>
  );
};
export default Bookshelf_01;
