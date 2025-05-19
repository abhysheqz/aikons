import React from "react";
const Waiter: React.FC<
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
        d="M11.589 18.958c.16.091.3.164.411.219q.168-.082.412-.219a9 9 0 0 0 1.586-1.139c1.15-1.034 2.252-2.596 2.252-4.817v-.75H18a2.75 2.75 0 0 1 2.75 2.75v7.75H3.25v-7.75A2.75 2.75 0 0 1 6 12.252h1.75v.75c0 2.22 1.103 3.783 2.252 4.817a9 9 0 0 0 1.586 1.14"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.75 11.287v4.426L12 14.34l-2.75 1.375v-4.427L12 12.66z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
    </svg>
  );
};
export default Waiter;
