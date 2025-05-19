import React from "react";
const ShoppingBasketSecure_01: React.FC<
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
        d="M12 3.25a4.5 4.5 0 0 0-4.5 4.5h-2a6.5 6.5 0 1 1 13 0h-2a4.5 4.5 0 0 0-4.5-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18 22.75s-.671-.224-.856-.308a6.7 6.7 0 0 1-1.357-.82c-1.003-.787-2.037-2.111-2.037-4.152v-3.069h.75a6 6 0 0 0 2.221-.446 10 10 0 0 0 .865-.429L18 13.25l.414.276c.15.082.584.317.865.429a6 6 0 0 0 2.221.446h.75v3.069c0 2.04-1.034 3.365-2.037 4.152-.496.39-.989.654-1.357.82-.185.084-.856.308-.856.308"
      />
      <path
        fill="currentColor"
        d="M2.5 6.75a.752.752 0 0 0-.739.877L4.368 22.75h10.837l-.19-.145C13.8 21.652 12.5 19.997 12.5 17.47v-4.319h2c.674 0 1.291-.17 1.757-.357.084-.033.682-.339.682-.339l1.06-.707 1.062.707s.597.306.682.34c.416.166.954.32 1.545.35l.951-5.518a.75.75 0 0 0-.739-.877z"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_01;
