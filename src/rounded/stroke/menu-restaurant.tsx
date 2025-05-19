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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 18v-8c0-1.886 0-2.829-.586-3.414C18.828 6 17.886 6 16 6H4v12c0 1.885 0 2.828.586 3.414S6.114 22 8 22h8c1.886 0 2.828 0 3.414-.586S20 19.885 20 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 11a3 3 0 0 1 3 3m-3-3a3 3 0 0 0-3 3m3-3v-1m3 4H9m6 0h1m-7 0H8M8 18h8M4 6l7.385-3.094c1.649-.691 2.473-1.037 3.13-.86a2 2 0 0 1 1.07.717C16 3.305 16 4.203 16 6"
      />
    </svg>
  );
};
export default MenuRestaurant;
