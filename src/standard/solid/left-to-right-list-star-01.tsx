import React from "react";
const LeftToRightListStar_01: React.FC<
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
        d="M2 5.25a1 1 0 0 1 1-1h9.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 11.75a1 1 0 0 1 1-1h9.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 18.25a1 1 0 0 1 1-1h9.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M16.614 15.107a.75.75 0 0 1 1.03.257l.856 1.428.857-1.428a.75.75 0 0 1 1.286.772l-.818 1.364H21a.75.75 0 0 1 0 1.5h-1.175l.818 1.364a.75.75 0 1 1-1.286.772l-.857-1.428-.857 1.428a.75.75 0 1 1-1.286-.772L17.175 19H16a.75.75 0 0 1 0-1.5h1.175l-.818-1.364a.75.75 0 0 1 .257-1.029M16.614 2.107a.75.75 0 0 1 1.03.257l.856 1.428.857-1.428a.75.75 0 1 1 1.286.772L19.825 4.5H21A.75.75 0 0 1 21 6h-1.175l.818 1.364a.75.75 0 1 1-1.286.772L18.5 6.708l-.857 1.428a.75.75 0 1 1-1.286-.772L17.175 6H16a.75.75 0 0 1 0-1.5h1.175l-.818-1.364a.75.75 0 0 1 .257-1.029"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListStar_01;
