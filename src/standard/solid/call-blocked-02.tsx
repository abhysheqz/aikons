import React from "react";
const CallBlocked_02: React.FC<
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
        d="M16.5 2a4.5 4.5 0 0 0-3.182 1.318A4.5 4.5 0 1 0 16.5 2M19 6.5q-.002.486-.172.914l-3.242-3.242A2.5 2.5 0 0 1 19 6.5m-4.828-.914 3.242 3.242a2.5 2.5 0 0 1-3.242-3.242"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.84 2H2.987A.98.98 0 0 0 2 3.003Q2.482 20.518 19.997 21A.98.98 0 0 0 21 20.012V16.16a1 1 0 0 0-.594-.915L17.02 13.74a1 1 0 0 0-.988.1l-2.58 1.842a.99.99 0 0 1-.976.102c-3.085-1.363-3.897-2.175-5.26-5.26a.99.99 0 0 1 .102-.977L9.16 6.97a1 1 0 0 0 .1-.989L7.755 2.594A1 1 0 0 0 6.84 2"
      />
    </svg>
  );
};
export default CallBlocked_02;
