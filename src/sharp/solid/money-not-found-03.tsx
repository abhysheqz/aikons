import React from "react";
const MoneyNotFound_03: React.FC<
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
        d="m22.25 20.836-1.415 1.414L1.75 3.164 3.163 1.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.182 4.233c.97.243 1.833.424 2.608.557l5.088 5.088a3 3 0 1 0 4.243 4.243l4.59 4.59A20 20 0 0 0 16 18.536c-2.443 0-3.756.474-5.775.743-1.985.265-4.331.253-8.407-.765l-.568-.142V4zm.568 12.962c1.228.29 2.274.478 3.186.59a4.005 4.005 0 0 0-3.186-3.219zm0-8.272c1.367-.284 2.536-1.308 2.995-2.477A30 30 0 0 1 2.75 5.91zM16 4.21c2.063 0 3.624.259 4.682.523 1.2.3 2.068.764 2.068.764v13.718l-1.5-1.5v-2.648a4.3 4.3 0 0 0-1.843.805l-4.467-4.467a3 3 0 0 0-2.346-2.346l-3.97-3.97c.505-.02.965-.063 1.401-.121 1.73-.23 3.418-.757 5.975-.757m2.517 1.65c.161 1.608 1.374 3.08 2.733 3.494V6.469a10 10 0 0 0-.932-.28 15 15 0 0 0-1.8-.33"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneyNotFound_03;
