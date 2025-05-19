import React from "react";
const MoneyNotFound_04: React.FC<
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
        d="M2.183 4.233c.97.243 1.833.424 2.608.557l5.088 5.088a3 3 0 1 0 4.243 4.243l4.59 4.59A20 20 0 0 0 16 18.536c-2.443 0-3.756.474-5.775.743-1.985.265-4.331.253-8.407-.765l-.568-.142V4zM5.5 11.488a1 1 0 0 0-1 1v.01a1 1 0 1 0 2 0v-.01a1 1 0 0 0-1-1M16.001 4.21c2.063 0 3.624.259 4.682.523 1.2.3 2.068.764 2.068.764v13.718l-7.81-7.81a3 3 0 0 0-2.346-2.346l-3.97-3.97c.505-.02.965-.063 1.401-.121 1.73-.23 3.418-.757 5.975-.757m2.5 6.278a1 1 0 0 0-1 1v.01a1 1 0 1 0 2 0v-.01a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m22.25 20.836-1.414 1.414L1.75 3.164 3.164 1.75z"
      />
    </svg>
  );
};
export default MoneyNotFound_04;
