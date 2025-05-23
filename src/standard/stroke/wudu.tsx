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
        d="M13.647 4.975 16.528 2l2.802 2.948c1.547 1.597 1.574 4.214 0 5.84a3.936 3.936 0 0 1-5.656.027c-1.547-1.597-1.574-4.214-.027-5.84Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 14h2.486a2 2 0 0 1 .964.248L10 15.375h1c1.5 0 2.5 1.149 2.5 2.125l-2.684.894a1 1 0 0 1-.632 0L7.5 17.5m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155v0a.877.877 0 0 1-.422 1.11l-7.585 3.792a2 2 0 0 1-1.44.136L4.5 20.019"
      />
    </svg>
  );
};
export default Wudu;
