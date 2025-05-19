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
        d="M3.25 6A.75.75 0 0 1 4 5.25h14A2.75 2.75 0 0 1 20.75 8v12A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20zM12 9.25a.75.75 0 0 1 .75.75v.325a3.76 3.76 0 0 1 2.925 2.925H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h.325a3.76 3.76 0 0 1 2.925-2.925V10a.75.75 0 0 1 .75-.75m-4 8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.998 3.413c0-1.801-1.883-2.845-3.442-2.234L6.488 3.95h10.51z"
      />
    </svg>
  );
};
export default MenuRestaurant;
