import React from "react";
const MoneyBag_01: React.FC<
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
        d="M20.943 16.84c-.564-3.39-3.23-6.934-5.096-8.962-.53-.575-1.284-.874-2.065-.874h-3.564c-.781 0-1.536.299-2.065.874-1.867 2.028-4.532 5.573-5.096 8.962-.488 2.938 2.222 5.164 5.251 5.164h7.384c3.029 0 5.74-2.226 5.25-5.164M9.086 7 7 3.5l1.985.33a2 2 0 0 0 1.743-.558L12 2l1.272 1.272a2 2 0 0 0 1.743.559L17 3.5 14.914 7"
      />
    </svg>
  );
};
export default MoneyBag_01;
