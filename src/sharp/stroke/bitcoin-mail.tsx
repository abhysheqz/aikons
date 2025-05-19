import React from "react";
const BitcoinMail: React.FC<
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
        strokeWidth={1.5}
        d="m2 9.978 10 5.485 10-5.485"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M5 11.972V2h14v9.972" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.438 11.14V5.824m1.562 0v-1.33m0 7.977v-1.33m-1.562-2.658h3.124m0 0c.518 0 .938.446.938.997v.665c0 .55-.42.997-.937.997H9.5m4.063-2.66c.517 0 .937-.446.937-.996V6.82c0-.551-.42-.997-.937-.997H9.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.825 7.16 2 10.05v11.926c0 .055.17 0 .224 0h19.677c.055 0 .099.055.099 0V10.049L19.218 7.16"
      />
    </svg>
  );
};
export default BitcoinMail;
