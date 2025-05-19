import React from "react";
const ShoppingCartAdd_02: React.FC<
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
        d="M7.45 5c.221 0 .37.234.316.45A2.3 2.3 0 0 0 10 8.3h.4a.3.3 0 0 1 .3.3V9a2.3 2.3 0 1 0 4.6 0v-.4a.3.3 0 0 1 .3-.3h.4a2.3 2.3 0 0 0 2.234-2.85c-.053-.216.095-.45.316-.45H22a1 1 0 0 1 0 2h-.105l-.538 4.84c-.15 1.35-.395 2.521-1.209 3.313-.813.792-1.991 1.004-3.345 1.117l-8.15.679q-.118.222-.273.424l-.334.432c.35.326.62.735.783 1.195h5.342a3.001 3.001 0 1 1 0 2H8.829a3.001 3.001 0 1 1-2.69-3.997l.658-.852a.96.96 0 0 0 .173-.825L3.995 3.764C3.884 3.333 3.472 3 2.966 3H2a1 1 0 0 1 0-2h.966c1.383 0 2.618.916 2.966 2.266L6.378 5zM17 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6 19a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8-16a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V7h2a1 1 0 1 0 0-2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCartAdd_02;
