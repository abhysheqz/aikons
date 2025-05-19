import React from "react";
const Mentoring: React.FC<
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
        d="M3.25 12.5a4.75 4.75 0 0 1 9.5 0v.5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM14.25 13a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M5.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.434 15.64a.99.99 0 0 1 .793-.39h7.819c.42 0 .794.258.927.641l1.731 4.984h3.205v1.875H4.182a.975.975 0 0 1-.927-.641L1.3 16.484c-.1-.286-.05-.6.134-.845"
      />
      <path
        fill="currentColor"
        d="M20.796 18.531h-7.33v-1.875h8.307c.54 0 .977.42.977.938v4.218c0 .518-.437.938-.977.938h-3.91v-1.875h2.933z"
      />
    </svg>
  );
};
export default Mentoring;
