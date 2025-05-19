import React from "react";
const Home_03: React.FC<
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
        d="m8.999 22 .003-5a1 1 0 0 1 1-1h3.997a1 1 0 0 1 1 1v5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.814 20.378 1.943-10.105a2 2 0 0 0-.817-2.016l-7.792-5.454a2 2 0 0 0-2.293 0L3.062 8.257a2 2 0 0 0-.817 2.016l1.944 10.105A2 2 0 0 0 6.153 22H17.85a2 2 0 0 0 1.964-1.622Z"
      />
    </svg>
  );
};
export default Home_03;
