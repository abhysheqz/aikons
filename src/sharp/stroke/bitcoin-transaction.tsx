import React from "react";
const BitcoinTransaction: React.FC<
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
        strokeWidth={1.5}
        d="M10.699 3.106c10.15-.915 13.13 10.66 7.478 15.473m-1.17-2.553-.074 3.556 3.574-.064M13.3 21.016C3.198 21.82.17 10.356 5.822 5.542m1.17 2.554.074-3.556H3.452"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.443 14.687V9.344m1.564 0V8.01m0 8.014v-1.336m-1.564-2.671h3.127m0 0c.519 0 .939.448.939 1.002v.667c0 .554-.42 1.002-.939 1.002H9.505m4.065-2.671c.519 0 .939-.449.939-1.002v-.668c0-.553-.42-1.002-.939-1.002H9.505"
      />
    </svg>
  );
};
export default BitcoinTransaction;
