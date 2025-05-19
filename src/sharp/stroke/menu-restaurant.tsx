import React from "react";
const MenuRestaurant: React.FC<
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
        strokeWidth={1.5}
        d="M4 6v16h16V6h-4M4 6h12M4 6l11.906-4H16v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 11a3 3 0 0 1 3 3m-3-3a3 3 0 0 0-3 3m3-3v-1m3 4H9m6 0h1m-7 0H8M8 18h8"
      />
    </svg>
  );
};
export default MenuRestaurant;
