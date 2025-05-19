import React from "react";
const Paypal: React.FC<
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
        d="M6.409 1.837a.744.744 0 0 1 .724-.587h7.187c3.487 0 6.062 3.287 5.292 6.73-.755 3.372-3.708 5.77-7.12 5.77h-2.286l-1.484 7H2.249z"
      />
      <path
        fill="currentColor"
        d="M11.116 15h1.3c4.037 0 7.525-2.807 8.415-6.745l.02-.095a4.58 4.58 0 0 1 .786 3.739c-.638 2.84-3.181 4.85-6.108 4.85h-1.943l-1.501 6h-2.62z"
      />
    </svg>
  );
};
export default Paypal;
