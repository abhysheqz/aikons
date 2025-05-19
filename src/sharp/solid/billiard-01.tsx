import React from "react";
const Billiard_01: React.FC<
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
        d="M7.25 9a7.75 7.75 0 1 1 5.481 7.413l3.368-3.666A3.43 3.43 0 0 0 11.253 7.9L7.587 11.27A7.8 7.8 0 0 1 7.25 9m11.892.814c.282-1.104.003-2.512-.706-3.32l1.128-.989c1.078 1.23 1.42 3.165 1.031 4.68z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.112 8.888a2.18 2.18 0 0 0-3.014-.065L1.25 18.787l1.014 1.106 8.282-7.612c.416-.014.712.118.909.297.187.17.329.425.38.751l-7.728 8.407 1.106 1.014 9.964-10.848a2.18 2.18 0 0 0-.065-3.014"
      />
    </svg>
  );
};
export default Billiard_01;
