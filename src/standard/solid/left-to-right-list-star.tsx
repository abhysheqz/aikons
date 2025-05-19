import React from "react";
const LeftToRightListStar: React.FC<
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
        d="M10.25 5.25a1 1 0 0 1 1-1h9.5a1 1 0 1 1 0 2h-9.5a1 1 0 0 1-1-1M10.25 11.75a1 1 0 0 1 1-1h9.5a1 1 0 1 1 0 2h-9.5a1 1 0 0 1-1-1M10.25 18.25a1 1 0 0 1 1-1h9.5a1 1 0 1 1 0 2h-9.5a1 1 0 0 1-1-1M3.364 15.107a.75.75 0 0 1 1.03.257l.856 1.428.857-1.428a.75.75 0 0 1 1.286.772L6.575 17.5H7.75a.75.75 0 0 1 0 1.5H6.575l.818 1.364a.75.75 0 0 1-1.286.772l-.857-1.428-.857 1.428a.75.75 0 1 1-1.286-.772L3.925 19H2.75a.75.75 0 0 1 0-1.5h1.175l-.818-1.364a.75.75 0 0 1 .257-1.029M3.364 2.107a.75.75 0 0 1 1.03.257l.856 1.428.857-1.428a.75.75 0 0 1 1.286.772L6.575 4.5H7.75a.75.75 0 0 1 0 1.5H6.575l.818 1.364a.75.75 0 1 1-1.286.772L5.25 6.708l-.857 1.428a.75.75 0 0 1-1.286-.772L3.925 6H2.75a.75.75 0 1 1 0-1.5h1.175l-.818-1.364a.75.75 0 0 1 .257-1.029"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListStar;
