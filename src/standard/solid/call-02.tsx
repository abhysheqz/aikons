import React from "react";
const Call_02: React.FC<
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
        d="M6.84 2H2.987A.98.98 0 0 0 2 3.003Q2.482 20.518 19.997 21A.98.98 0 0 0 21 20.012V16.16a1 1 0 0 0-.594-.915L17.02 13.74a1 1 0 0 0-.988.1l-2.58 1.842a.99.99 0 0 1-.976.102c-3.085-1.363-3.897-2.175-5.26-5.26a.99.99 0 0 1 .102-.977L9.16 6.97a1 1 0 0 0 .1-.989L7.755 2.594A1 1 0 0 0 6.84 2"
      />
    </svg>
  );
};
export default Call_02;
