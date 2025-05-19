import React from "react";
const RestaurantTable: React.FC<
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
        d="M3.283 9.28A.75.75 0 0 1 4 8.75h16c.33 0 .62.215.717.53l2 6.5a.75.75 0 0 1-.717.97c-.626 0-.9.165-1.273.389l-.008.004c-.457.274-1.016.607-2.052.607s-1.596-.333-2.053-.607l-.008-.005c-.372-.223-.647-.388-1.273-.388s-.9.165-1.273.389l-.008.004c-.457.274-1.015.607-2.052.607s-1.595-.333-2.053-.607l-.007-.005c-.372-.223-.648-.388-1.273-.388-.338 0-.547.05-.696.107-.156.06-.28.14-.472.267l-.015.01c-.182.122-.429.286-.752.41-.341.13-.736.206-1.232.206-1.025 0-1.62-.324-2.106-.59l-.003-.002c-.43-.234-.751-.408-1.391-.408a.75.75 0 0 1-.717-.97z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 16.25a.75.75 0 0 1 .75.75v4.25H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25V17a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.75 2a.75.75 0 0 0-1.5 0v.791A6.76 6.76 0 0 0 5.534 7.55h12.928a6.76 6.76 0 0 0-5.714-4.759z"
      />
    </svg>
  );
};
export default RestaurantTable;
