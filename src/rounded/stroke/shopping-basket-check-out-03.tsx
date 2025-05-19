import React from "react";
const ShoppingBasketCheckOut_03: React.FC<
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
        strokeWidth={1.5}
        d="M11.5 8h8.696c.625 0 .937 0 1.166.1 1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335 2 2 0 0 0-.802.687M7.5 8H3.804c-.625 0-.937 0-1.166.1-1.012.447-.56 1.57-.39 2.378.032.146.131.269.27.335a1.93 1.93 0 0 1 1.09 1.4l.593 3.375c.26 1.485.35 3.606 1.65 4.652.955.76 2.33.76 5.081.76H13.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 18.5c.491.506 1.8 2.5 2.5 2.5m2.5-2.5c-.491.506-1.8 2.5-2.5 2.5m0 0v-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 11 10 3m5 0 2.5 5"
      />
    </svg>
  );
};
export default ShoppingBasketCheckOut_03;
