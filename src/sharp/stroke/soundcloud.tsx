import React from "react";
const Soundcloud: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.007 6.09V19M5.003 9.942v8.967M2 11.68v5.49"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.051 18.98-.064-13.938c3.654-.425 7.144 2.438 6.515 5.838m0 0c-.153.83-.551 1.69-1.252 2.543m1.252-2.543c1.046-.42 3.774.237 4.388 3.065.693 3.191-2.004 5.036-4.106 5.036h-3.73"
      />
    </svg>
  );
};
export default Soundcloud;
