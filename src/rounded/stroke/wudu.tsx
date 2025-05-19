import React from "react";
const Wudu: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.528 2-2.881 2.975c-1.547 1.626-1.52 4.243.027 5.84a3.936 3.936 0 0 0 5.655-.027c1.574-1.626 1.547-4.243 0-5.84z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767 0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L7.342 16.75m6.158-.25 4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L4.5 20.02"
      />
    </svg>
  );
};
export default Wudu;
