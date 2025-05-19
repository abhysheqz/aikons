import React from "react";
const GarbageTruck: React.FC<
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
        d="M17 15.75a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M7 15.75a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.423 3.534a.98.98 0 0 1 .69-.284h9.773v1.938h-.977v.968h2.932c.343 0 .661.179.838.47l2.932 4.844c.09.15.139.323.139.499v5.812a.973.973 0 0 1-.977.969h-1.056q.033-.245.033-.5a3.75 3.75 0 1 0-7.467.5h-2.566q.033-.245.033-.5a3.75 3.75 0 1 0-7.467.5H2.227a.98.98 0 0 1-.69-.284.97.97 0 0 1-.287-.685V9.062c0-.256.103-.503.286-.684zM15.91 11h4.138l-1.76-2.906H15.91zM10 11V7h2v4zM6 8v3h2V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GarbageTruck;
