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
        fillRule="evenodd"
        d="M17.998 12.251a2.75 2.75 0 0 1 2.752 2.75v7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-7A2.75 2.75 0 0 1 6 12.252h1a.75.75 0 0 1 .75.75c0 2.222 1.103 3.784 2.252 4.818A9.1 9.1 0 0 0 12 19.177q.168-.082.412-.218a9 9 0 0 0 1.586-1.14c1.15-1.034 2.252-2.596 2.252-4.817a.75.75 0 0 1 .75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.394 11.862a.75.75 0 0 1 .356.638v2a.75.75 0 0 1-1.085.67L12 14.339l-1.665.833a.75.75 0 0 1-1.085-.67v-2a.75.75 0 0 1 1.085-.672l1.665.832 1.665-.832a.75.75 0 0 1 .73.033M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Waiter;
