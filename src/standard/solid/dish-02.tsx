import React from "react";
const Dish_02: React.FC<
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
        d="M21 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a.75.75 0 0 0 .75-.75v-3H21a6 6 0 0 1 0-12h.75V3a.75.75 0 0 0-.75-.75M21.75 8H21a4 4 0 0 0 0 8h.75zM3 2a1 1 0 0 1 1 1v3.5h1V3a1 1 0 0 1 2 0v3.5h1V3a1 1 0 0 1 2 0v4.352c0 1.427-.444 2.594-1.203 3.415A3.8 3.8 0 0 1 7 11.865V21a1 1 0 1 1-2 0v-9.135a3.8 3.8 0 0 1-1.797-1.098C2.443 9.946 2 8.778 2 7.352V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dish_02;
