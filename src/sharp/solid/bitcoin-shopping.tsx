import React from "react";
const BitcoinShopping: React.FC<
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
        d="M12 3.25a4.5 4.5 0 0 0-4.5 4.5h-2a6.5 6.5 0 0 1 13 0h-2a4.5 4.5 0 0 0-4.5-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 7.25a.75.75 0 0 0-.738.882L4.374 22.75H19.63l2.608-14.618a.75.75 0 0 0-.738-.882zm10.25 4.333V10.25h-1.5v1.333h-2.5v1.5h.938v3.834H8.75v1.5h2.5v1.333h1.5v-1.333h.813c.976 0 1.687-.83 1.687-1.75V16c0-.362-.11-.71-.303-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75zm-1.562 2.667v-1.167h2.374c.06 0 .188.066.188.25V14c0 .184-.129.25-.187.25zm0 1.5h2.374c.06 0 .188.066.188.25v.667c0 .184-.129.25-.187.25h-2.376z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinShopping;
