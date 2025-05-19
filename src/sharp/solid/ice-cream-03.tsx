import React from "react";
const IceCream_03: React.FC<
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
        d="M6.25 7a5.75 5.75 0 1 1 11.356 1.284c.22.136.419.29.588.463.312.319.556.743.556 1.253 0 .534-.267.952-.62 1.243-.336.277-.77.463-1.22.596-.731.215-1.656.332-2.66.382v.279a2.25 2.25 0 0 1-4.5 0v-.28c-1.004-.049-1.929-.166-2.66-.381-.45-.133-.884-.32-1.22-.596-.353-.291-.62-.709-.62-1.243 0-.51.244-.934.556-1.253q.256-.26.588-.463A5.8 5.8 0 0 1 6.25 7"
      />
      <path
        fill="currentColor"
        d="m7.607 13.243 3.699 9.04a.75.75 0 0 0 1.388 0l3.699-9.04q-.488.09-1.007.144a3.501 3.501 0 0 1-6.773 0 13 13 0 0 1-1.006-.144"
      />
    </svg>
  );
};
export default IceCream_03;
