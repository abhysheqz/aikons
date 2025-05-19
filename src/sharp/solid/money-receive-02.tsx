import React from "react";
const MoneyReceive_02: React.FC<
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
        d="M13 2h-2v3.085l-1.5-1.5L8.086 5 12 8.914 15.914 5 14.5 3.585l-1.5 1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.182 6.234c2.82.705 4.726.895 6.23.86L12 10.682l4.463-4.464c1.835.035 3.242.272 4.219.516 1.2.3 2.068.764 2.068.764V22s-1.288-.7-2.432-.986c-.942-.235-2.381-.477-4.318-.477-2.443 0-3.755.473-5.775.743-1.985.264-4.331.253-8.407-.766l-.568-.141V6zm.568 12.962c1.228.29 2.274.477 3.187.59a4.005 4.005 0 0 0-3.187-3.22zm18.5-2.128c-1.264.227-2.4 1.011-2.896 2.089.942.1 1.719.25 2.328.402q.313.079.568.156zM11.999 11A3 3 0 1 0 12 17 3 3 0 0 0 12 11m6.519-3.14c.16 1.609 1.374 3.08 2.732 3.494V8.469a10 10 0 0 0-.932-.28 15 15 0 0 0-1.8-.33M2.75 10.923c1.367-.284 2.537-1.308 2.995-2.476A30 30 0 0 1 2.75 7.91z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneyReceive_02;
