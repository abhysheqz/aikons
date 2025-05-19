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
        d="M4.25 3v3.5h1V3h2v3.5h1V3h2v4.352c0 1.427-.444 2.594-1.203 3.415a3.8 3.8 0 0 1-1.797 1.098V21h-2v-9.135a3.8 3.8 0 0 1-1.797-1.098c-.76-.821-1.203-1.989-1.203-3.415V3zM21 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75h.75V18H21a6 6 0 0 1 0-12h.75V2.25z"
      />
      <path fill="currentColor" d="M21.75 8H21a4 4 0 0 0 0 8h.75z" />
    </svg>
  );
};
export default Dish_02;
