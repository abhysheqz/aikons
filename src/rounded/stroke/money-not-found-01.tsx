import React from "react";
const MoneyNotFound_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.017 15C4.217 15 6 16.783 6 18.983M2.017 9a3.984 3.984 0 0 0 3.86-2.998M18 5.017C18 7.197 19.769 8.97 21.942 9M9.879 9.879a3 3 0 0 0 4.243 4.243M3 3l18 18M21.89 15c-.818 0-1.578.253-2.205.685"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.541 17.541C22 16.639 22 15.278 22 13v-2c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5H9m9.93 13.93c-.762.07-1.716.07-2.93.07H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2c0-2.828 0-4.243.879-5.121.501-.502 1.177-.717 2.19-.81"
      />
    </svg>
  );
};
export default MoneyNotFound_01;
