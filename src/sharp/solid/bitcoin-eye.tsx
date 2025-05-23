import React from "react";
const BitcoinEye: React.FC<
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
        d="M3.25 2.75a1.5 1.5 0 1 1 2.95.389l1.55 1.55V7.75h-1.5V5.31L5.139 4.2A1.502 1.502 0 0 1 3.25 2.75m7.25 0a1.5 1.5 0 1 1 2.25 1.3v2.7h-1.5v-2.7a1.5 1.5 0 0 1-.75-1.3m7.25 0a1.5 1.5 0 1 1 1.111 1.45L17.75 5.31v2.44h-1.5V4.69l1.55-1.551a1.5 1.5 0 0 1-.05-.389M22.59 15.744c-.24.364-.648.986-.833 1.229a19 19 0 0 1-2.09 2.327c-1.788 1.68-4.432 3.45-7.667 3.45s-5.878-1.77-7.667-3.45a19 19 0 0 1-2.09-2.327c-.184-.243-.593-.865-.832-1.229l-.16-.244.16-.244c.24-.364.648-.986.832-1.229a19 19 0 0 1 2.09-2.327C6.122 10.02 8.765 8.25 12 8.25s5.879 1.77 7.667 3.45a19 19 0 0 1 2.09 2.327c.185.243.593.865.832 1.229l.161.244zm-9.84-3.66V10.75h-1.5v1.333h-2.5v1.5h.938v3.834H8.75v1.5h2.5v1.333h1.5v-1.333h.813c.977 0 1.687-.83 1.687-1.75V16.5c0-.362-.11-.71-.303-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75zm-1.562 2.666v-1.167h2.375c.058 0 .187.066.187.25v.667c0 .184-.129.25-.187.25zm0 1.5h2.375c.058 0 .187.066.187.25v.667c0 .184-.129.25-.187.25h-2.375z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinEye;
