import React from "react";
const Wechat: React.FC<
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
        strokeWidth={2}
        d="M6.99 7.015H7m5.967 0h.01M17.955 14.457h.01m-3.991 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 16.025c.018-2.75-2.664-4.997-5.991-5.02-3.328-.023-6.041 2.187-6.06 4.936-.02 2.75 2.662 4.997 5.99 5.02 1.138.008 2.109-.201 3.02-.648l2.995.688q.009 0 .008-.006l-.785-2.472c.56-.75.816-1.552.822-2.498Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.982 16.907c-1.516 0-2.806-.289-4.013-.929l-3.955.926q-.01 0-.01-.009l1.07-3.462C2.346 12.385 2 11.267 2 9.953 2 6.113 5.574 3 9.982 3c4.409 0 7.982 3.114 7.982 6.954q0 .702-.153 1.363"
      />
    </svg>
  );
};
export default Wechat;
