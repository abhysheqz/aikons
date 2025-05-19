import React from "react";
const ShoppingCartCheckIn_01: React.FC<
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
        d="M13.625 2.249a1 1 0 0 1 1 1v4.293h1.793c.265 0 .543.097.64.344a1 1 0 0 1-.226 1.07l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1-.225-1.07c.096-.247.374-.344.64-.344h1.792V3.249a1 1 0 0 1 1-1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.751 9.875a2.3 2.3 0 0 0 .518-2.46c-.393-1.01-1.402-1.173-1.851-1.173h-.493V4.999h5.2a.75.75 0 0 1 .737.888l-1.5 8a.75.75 0 0 1-.608.6l-10.917 1.9.004.021a1 1 0 0 0 .987.84h8.297q.056 0 .11.007.07-.004.14-.004a2.5 2.5 0 1 1-2.45 1.998h-4.1q.05.243.05.502a2.5 2.5 0 1 1-4.393-1.633 3 3 0 0 1-.615-1.391L4.773 3.749H3.125a1 1 0 1 1 0-2h2.5a1 1 0 0 1 .987.84L7.001 5h4.324v1.243h-.493c-.45 0-1.458.163-1.85 1.173a2.3 2.3 0 0 0 .517 2.46l2.5 2.5a2.3 2.3 0 0 0 3.252 0zm-8.376 8.876a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartCheckIn_01;
