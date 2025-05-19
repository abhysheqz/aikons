import React from "react";
const Passport_01: React.FC<
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
        d="M20.72 7H18V5h2.72a2 2 0 0 1 1.94 2.485l-3.5 14A2 2 0 0 1 17.22 23H13.5v-2h3.72z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm7.084 3.374A3.25 3.25 0 0 0 6.75 10c0 1.079.525 2.034 1.334 2.626-.215-.754-.334-1.664-.334-2.626s.12-1.872.334-2.626M10 5.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m0 1.537-.023.025c-.097.11-.218.31-.335.623-.233.62-.392 1.527-.392 2.565s.16 1.945.392 2.565c.117.313.238.514.335.623l.023.025.023-.025c.097-.11.218-.31.335-.623.233-.62.392-1.527.392-2.565s-.16-1.945-.392-2.565c-.117-.313-.238-.514-.335-.623zm1.916 5.839c.215-.754.334-1.664.334-2.626s-.12-1.872-.334-2.626A3.25 3.25 0 0 1 13.25 10a3.25 3.25 0 0 1-1.334 2.626M5.75 17c0 .414.336.75.75.75h7a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0-.75.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Passport_01;
