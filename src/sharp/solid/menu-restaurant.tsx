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
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 5.25h17.5v17.5H3.25zm9.5 5.075a3.75 3.75 0 0 1 2.925 2.925h1.075v1.5h-9.5v-1.5h1.075a3.75 3.75 0 0 1 2.925-2.925V9.25h1.5zm4 6.925h-9.5v1.5h9.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="m7.599 4 8.185-2.75h.967V4z" />
    </svg>
  );
};
export default MenuRestaurant;
