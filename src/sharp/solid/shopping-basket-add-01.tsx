import React from "react";
const ShoppingBasketAdd_01: React.FC<
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
        d="M19.251 19.75v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.001 1.25a6.5 6.5 0 0 0-6.424 5.5H2.501a.75.75 0 0 0-.74.877L4.37 22.75h11.382v-1.5h-3v-5h3v-3h5.52l.97-5.623a.75.75 0 0 0-.74-.877h-3.077a6.5 6.5 0 0 0-6.423-5.5m0 2a4.5 4.5 0 0 0-4.389 3.5h8.778A4.5 4.5 0 0 0 12 3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingBasketAdd_01;
