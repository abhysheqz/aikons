import React from "react";
const Plate: React.FC<
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
        d="M9 2.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5M5.75 10a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M9 5.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.24 9.575c-.02-.46-.03-.69.114-.784s.329 0 .696.186a6.75 6.75 0 1 1-7.754 10.865c-.296-.289-.444-.433-.402-.6s.263-.232.707-.362a9.2 9.2 0 0 0 1.75-.714c.173-.093.26-.139.34-.137s.17.058.35.169a3.75 3.75 0 0 0 4.348-6.09c-.163-.134-.244-.2-.273-.275-.028-.075-.012-.172.019-.365a9.3 9.3 0 0 0 .106-1.893"
      />
      <path
        fill="currentColor"
        d="M17.218 14.25c.2-.386.3-.579.494-.569.193.01.257.173.384.499a2.25 2.25 0 0 1-2.197 3.068c-.348-.015-.522-.023-.594-.203s.078-.336.378-.648a9.3 9.3 0 0 0 1.535-2.146"
      />
    </svg>
  );
};
export default Plate;
