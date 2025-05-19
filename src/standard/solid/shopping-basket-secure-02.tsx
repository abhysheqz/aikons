import React from "react";
const ShoppingBasketSecure_02: React.FC<
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
        d="M11.5 3A3.5 3.5 0 0 0 8 6.5V8H6V6.5a5.5 5.5 0 1 1 11 0V8h-2V6.5A3.5 3.5 0 0 0 11.5 3M16.824 13.422c.421-.23.93-.23 1.352 0a8.4 8.4 0 0 0 2.433.869 1.384 1.384 0 0 1 1.141 1.358v1.971c0 1.555-.773 2.73-1.59 3.531a8.2 8.2 0 0 1-2.13 1.479c-.337.16-.723.16-1.06 0a8.2 8.2 0 0 1-2.13-1.479c-.817-.802-1.59-1.976-1.59-3.53v-1.972c0-.687.502-1.244 1.141-1.358a8.4 8.4 0 0 0 2.433-.869"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.75 17H3.276L2.01 8.141A1 1 0 0 1 3 7h17a1 1 0 0 1 .99 1.141l-.65 4.55a7 7 0 0 1-1.447-.586 2.91 2.91 0 0 0-2.786 0 6.9 6.9 0 0 1-1.98.71 2.884 2.884 0 0 0-2.377 2.834zM14.7 23H6.734a3 3 0 0 1-2.97-2.576L3.56 19h8.348c.33 1.402 1.122 2.477 1.88 3.221.3.297.611.556.91.779"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_02;
