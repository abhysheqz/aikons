import React from "react";
const Socks: React.FC<
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
        d="M21.25 2.25h-8.5v3.5h8.5zm-8.5 9.44V7h8.5v4.325a3.75 3.75 0 0 0-2.823 6.8l-1.372 1.369-6.048-6.048zm7.75 1.06q.396.002.75.128v2.433l-1.723 1.718a2.25 2.25 0 0 1 .973-4.279M9.95 14.51a4.27 4.27 0 0 0 .052 5.99 4.276 4.276 0 0 0 5.99.052zM6.75 2.25h4.75v3.5H6.75zm2.366 11.326a5.5 5.5 0 0 0-1.445 2.535l-2.664-2.665 1.743-1.755V7h4.75v4.176zm-1.582 4.519a5.5 5.5 0 0 0 1.47 3.17 4.28 4.28 0 0 1-5.002-.766 4.27 4.27 0 0 1-.052-5.988z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Socks;
