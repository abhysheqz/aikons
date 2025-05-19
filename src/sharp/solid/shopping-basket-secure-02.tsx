import React from "react";
const ShoppingBasketSecure_02: React.FC<
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
        d="M12 1.25a6.5 6.5 0 0 0-6.424 5.5h2.036a4.5 4.5 0 0 1 8.777 0h2.035A6.5 6.5 0 0 0 12 1.25M17.5 22.75s-.671-.224-.856-.308a6.7 6.7 0 0 1-1.357-.82c-1.003-.787-2.037-2.111-2.037-4.152v-3.069H14a6 6 0 0 0 2.221-.446 10 10 0 0 0 .865-.429l.414-.276.414.276c.15.082.584.317.865.43A6 6 0 0 0 21 14.4h.75v3.069c0 2.04-1.034 3.365-2.037 4.152-.496.39-.989.654-1.357.82-.185.084-.856.308-.856.308M12.076 18.5H4.169l.747 4.25h9.79l-.191-.145c-1.04-.817-2.145-2.15-2.44-4.105"
      />
      <path
        fill="currentColor"
        d="M2.261 7.646a.76.76 0 0 1 .748-.892h17.982a.76.76 0 0 1 .748.89v.005l-.95 5.497a4.9 4.9 0 0 1-1.546-.351 26 26 0 0 1-.682-.34l-1.06-.707-1.062.707s-.597.306-.681.34a4.8 4.8 0 0 1-1.758.357h-2V16.5H3.818z"
      />
    </svg>
  );
};
export default ShoppingBasketSecure_02;
