import React from "react";
const MoneyBag_02: React.FC<
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
        d="M20.943 16.849c-.657-3.94-4.167-8.09-5.943-9.813H9C7.224 8.76 3.714 12.91 3.057 16.85 2.57 19.779 5.28 22 8.308 22h7.384c3.029 0 5.74-2.221 5.25-5.152"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 11.526c-1.105 0-2 .67-2 1.496s.895 1.496 2 1.496 2 .67 2 1.497c0 .826-.895 1.497-2 1.497m0-5.987c.87 0 1.612.417 1.886.998M12 11.525V10.03m0 7.483c-.87 0-1.612-.417-1.886-.998m1.886.998v1.496"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.03 7.036 7.019 3.524a.01.01 0 0 1 .01-.015l2.99.462 2-1.97a.01.01 0 0 1 .013.001l1.95 1.97 2.99-.463a.01.01 0 0 1 .01.015l-1.996 3.512"
      />
    </svg>
  );
};
export default MoneyBag_02;
