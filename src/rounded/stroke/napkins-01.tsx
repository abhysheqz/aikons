import React from "react";
const Napkins_01: React.FC<
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
        d="M12 19h7.909a1.091 1.091 0 0 0 .823-1.808L7.808 2.354A1.03 1.03 0 0 0 6 3.03V13c0 2.828 0 4.243.879 5.121C7.757 19 9.172 19 12 19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6.722 4.808 5.354A1.03 1.03 0 0 0 3 6.03V16c0 2.828 0 4.243.879 5.121C4.757 22 6.172 22 9 22h7.909a1.091 1.091 0 0 0 .823-1.808L16.694 19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 4v12h10.5"
      />
    </svg>
  );
};
export default Napkins_01;
