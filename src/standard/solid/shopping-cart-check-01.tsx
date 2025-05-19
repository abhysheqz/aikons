import React from "react";
const ShoppingCartCheck_01: React.FC<
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
        d="M2.125 2.749a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .987.84L7.001 5h6.088L11.97 6.342l-.219-.22a2.3 2.3 0 0 0-1.62-.673 2.3 2.3 0 0 0-1.632 3.926l2 2a2.3 2.3 0 0 0 3.393-.153l5-6a2 2 0 0 0 .164-.223h2.069a.75.75 0 0 1 .737.888l-1.5 8a.75.75 0 0 1-.608.6l-10.917 1.9.004.021a1 1 0 0 0 .987.841h8.297q.055 0 .109.006l.141-.004a2.5 2.5 0 1 1-2.45 1.998h-4.1q.05.244.05.502a2.5 2.5 0 1 1-4.393-1.633 3 3 0 0 1-.615-1.391L4.773 3.749H3.125a1 1 0 0 1-1-1m7.25 16.002a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m.39-16.77a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2-2a1 1 0 1 1 1.414-1.414l1.226 1.226 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartCheck_01;
