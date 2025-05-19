import React from "react";
const BitcoinMoney_01: React.FC<
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
        d="M6.25 3.25h-5v5H3A3.25 3.25 0 0 0 6.25 5zm-5 6.5H3A4.75 4.75 0 0 0 7.75 5V3.25h9V4.5a4.75 4.75 0 0 0 4.75 4.75h1.25v5H21A4.75 4.75 0 0 0 16.25 19v1.75h-8.5V19A4.75 4.75 0 0 0 3 14.25H1.25zm5 11V19A3.25 3.25 0 0 0 3 15.75H1.25v5zm11.5 0h5v-5H21A3.25 3.25 0 0 0 17.75 19zm5-13v-4.5h-4.5V4.5a3.25 3.25 0 0 0 3.25 3.25zm-10 .834V7.25h-1.5v1.334h-2.5v1.5h.938v3.833H8.75v1.5h2.5v1.333h1.5v-1.333h.813c.977 0 1.687-.83 1.687-1.75V13c0-.362-.11-.71-.303-1 .193-.289.303-.637.303-1v-.666c0-.92-.71-1.75-1.687-1.75zm-1.562 2.666v-1.166h2.375c.059 0 .187.065.187.25V11c0 .185-.128.25-.187.25zm0 1.5h2.375c.059 0 .187.066.187.25v.667c0 .184-.128.25-.187.25h-2.375z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinMoney_01;
