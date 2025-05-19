import React from "react";
const CursorHold_01: React.FC<
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
        d="m9.313 3.405-2.079-1.84c-.783-.692-2.032-.183-2.09.872L4.252 18.87c-.061 1.124 1.266 1.743 2.094 1.003L9.71 16.87l2.067 5.095c.262.643.995.95 1.636.693l1.878-.756c.643-.258.958-.99.696-1.636l-2.104-5.182 4.775-.635c1.063-.141 1.478-1.467.668-2.184l-1.059-.937a6.253 6.253 0 0 1-8.954-7.923"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m1.73 4.081a.75.75 0 0 0-1.06-1.06l-1.6 1.6a.75.75 0 0 0 1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CursorHold_01;
