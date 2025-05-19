import React from "react";
const Money_01: React.FC<
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
        d="M2.017 15C4.217 15 6 16.783 6 18.983M18 18.983v-.092A3.89 3.89 0 0 1 21.89 15M6 5.017C6 7.217 4.217 9 2.017 9M18 5.017C18 7.197 19.769 8.97 21.942 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 5H8c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11v2c0 2.828 0 4.243.879 5.121C3.757 19 5.172 19 8 19h8c2.828 0 4.243 0 5.121-.879C22 17.243 22 15.828 22 13v-2c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
    </svg>
  );
};
export default Money_01;
