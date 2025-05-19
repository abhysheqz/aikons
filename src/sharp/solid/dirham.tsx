import React from "react";
const Dirham: React.FC<
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
        d="M1.25 12.002c0-5.937 4.813-10.75 10.75-10.75s10.75 4.813 10.75 10.75-4.813 10.75-10.75 10.75-10.75-4.813-10.75-10.75m14.518-4.059 1.961 2.271c1.241 1.438.137 3.536-1.68 3.537H14.25l-.001-1.5h1.798c.64 0 .879-.671.546-1.057l-1.961-2.27zM9.75 13.75V7.252h-1.5v6.498zm.543 2.239c-.145-.04-.203-.017-.263.042a.76.76 0 0 0-.2.301.5.5 0 0 0-.015.223.7.7 0 0 0 .064.196H11v1.5H7.5v-1.5h.828c-.082-.582.083-1.222.642-1.78.573-.574 1.265-.551 1.711-.431.221.059.452.122.76.355 0 0 .001.001-.441.607l-.442.606a1.6 1.6 0 0 0-.265-.12M13 14.012v-2.01h-2v2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dirham;
