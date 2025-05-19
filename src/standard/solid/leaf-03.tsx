import React from "react";
const Leaf_03: React.FC<
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
        d="M5.638 17.301 2.97 19.97a.75.75 0 1 0 1.06 1.06l2.716-2.716a7 7 0 0 1-.55-.413l-.051-.046a8 8 0 0 1-.507-.554M21.21 3.525l-.002-.024v-.01a.75.75 0 0 0-.7-.698h-.002l-.12-.007q-.115-.007-.33-.015a35.842 35.842 0 0 0-5.095.189c-1.509.167-3.165.463-4.708.977-1.537.513-3.011 1.258-4.108 2.356A8.177 8.177 0 0 0 5.638 17.3L14.97 7.97a.75.75 0 1 1 1.06 1.06l-9.284 9.284c1.516 1.024 3.48 1.512 5.353 1.513 2.099 0 4.248-.612 5.608-1.972 1.098-1.097 1.843-2.57 2.356-4.108.514-1.543.81-3.2.977-4.708a36 36 0 0 0 .174-5.426z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Leaf_03;
