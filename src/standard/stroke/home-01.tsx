import React from "react";
const Home_01: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.001 17c-.8.622-1.85 1-3 1s-2.2-.378-3-1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.813 20.378 1.943-10.105a2 2 0 0 0-.817-2.016l-7.791-5.454a2 2 0 0 0-2.294 0L3.06 8.257a2 2 0 0 0-.817 2.016L4.19 20.378A2 2 0 0 0 6.153 22h11.696a2 2 0 0 0 1.964-1.622Z"
      />
    </svg>
  );
};
export default Home_01;
