import React from "react";
const Suit_01: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.009 10.993h-.01m.01 3.497h-.01m.01 3.496h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 4.999 5-2.997v5.994zm0 0L7 2.002v5.994z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.048 5.014 4.942.983a.01.01 0 0 1 .008.012L19 21.997H5L2.002 6.01a.01.01 0 0 1 .008-.012L7 5.014"
      />
    </svg>
  );
};
export default Suit_01;
