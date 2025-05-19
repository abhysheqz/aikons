import React from "react";
const ElectricPlugs: React.FC<
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
        d="M9 2v3M15 2v3M12 18v4M12.694 8.5l-2.091 2.175c-.224.233-.064.568.302.63l2.19.372c.39.066.538.438.266.664L10.767 14.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.307 5H9.693c-2.138 0-3.207 0-3.798.698-.59.697-.428 1.768-.103 3.91l.524 3.45C6.836 16.484 8.286 18 12 18s5.164-1.516 5.684-4.942l.524-3.45c.325-2.142.487-3.213-.103-3.91S16.445 5 14.307 5Z"
      />
    </svg>
  );
};
export default ElectricPlugs;
