import React from "react";
const Question: React.FC<
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
        d="M4.25 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-3 10c0-3.241 2.867-5.75 6.25-5.75s6.25 2.509 6.25 5.75a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75M17 1.25c-3.144 0-5.75 2.447-5.75 5.533 0 1.479.603 2.818 1.575 3.805a1 1 0 0 1 .052.07 1.9 1.9 0 0 1-.384.816.75.75 0 0 0 .445 1.21c.891.166 1.813.016 2.602-.404.083-.044.14-.075.184-.097l.17.031q.549.103 1.106.103c3.144 0 5.75-2.447 5.75-5.534S20.144 1.25 17 1.25m-1.5 5a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5zm2.992 0a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Question;
