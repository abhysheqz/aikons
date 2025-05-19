import React from "react";
const Prawn: React.FC<
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
        d="M9 1.25h11.16c1.625 0 2.862 1.476 2.538 3.076-.343 1.699-1.765 2.863-3.266 3.314-.404 1.515-1.173 2.631-2.182 3.415-1.488 1.156-3.38 1.495-5.05 1.495h-1.7c-.494 0-.94.198-1.266.52L3.052 8.014A9.24 9.24 0 0 1 9.75 4.28V8.4h1.5V4.25h8.5V5q0 .47-.033.908c.771-.418 1.352-1.092 1.511-1.879A1.076 1.076 0 0 0 20.16 2.75H9zM15.5 9a1 1 0 1 0 0-2h-.01a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.256 9.3a9.2 9.2 0 0 0-1.006 4.2 9.23 9.23 0 0 0 3.133 6.94l4.69-4.992a1.8 1.8 0 0 1-.359-.866zM5.592 21.343l4.88-5.193h3.606c.207-.998.809-1.88 1.55-2.534.922-.814 2.155-1.366 3.372-1.366h.75V13c0 5.052-4.088 9.75-9.25 9.75a9.2 9.2 0 0 1-4.908-1.407"
      />
    </svg>
  );
};
export default Prawn;
