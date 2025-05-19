import React from "react";
const ArrowUpRight_03: React.FC<
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
        d="M17.976 6.024c-.334-.335-.794-.516-1.175-.627a8.6 8.6 0 0 0-1.38-.26c-.986-.115-2.154-.144-3.252-.136a61 61 0 0 0-2.95.102c-.392.022-1.303.088-1.303.088a1 1 0 1 0 .169 1.993s.868-.063 1.25-.085c.762-.044 1.79-.09 2.85-.098 1.066-.008 2.139.022 3.005.123l.241.03L5.293 17.294a1 1 0 1 0 1.414 1.414L16.845 8.57q.016.116.031.241c.101.866.131 1.94.123 3.005a59 59 0 0 1-.098 2.851c-.022.381-.085 1.25-.085 1.25a1 1 0 1 0 1.993.167s.066-.91.088-1.302c.046-.784.093-1.846.102-2.95.008-1.098-.021-2.266-.136-3.253a8.6 8.6 0 0 0-.26-1.378c-.111-.382-.292-.841-.627-1.176"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUpRight_03;
