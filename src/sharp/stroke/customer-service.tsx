import React from "react";
const CustomerService: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11.5 7h2v2.5h-2V12h2M18 7v2.5m0 0h-2.143V7M18 9.5V12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 4.305q.133-.15.277-.294A6.867 6.867 0 1 1 19.695 14"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.775 11.983 7.99 8.014 5.005 2.006a.01.01 0 0 0-.015-.004C2.823 3.718 1.797 5.556 2.03 7.17c.303 2.105 1.497 5.424 4.634 8.702 1.128 1.352 3.12 3.149 5.424 4.392m0 0c2.415 1.302 5.176 2.544 7.513 1.077.514-.323 1.913-1.576 2.397-2.295a.01.01 0 0 0-.004-.014l-5.99-3.011z"
      />
    </svg>
  );
};
export default CustomerService;
