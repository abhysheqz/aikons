import React from "react";
const Simcard_01: React.FC<
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
        strokeWidth={1.5}
        d="m9.99 18.479-2.496-2.497 2.496-2.497m3.994 0 2.496 2.497-2.496 2.497"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m3.024 2.102-.032 19.803a.1.1 0 0 0 .1.1h17.803a.1.1 0 0 0 .1-.1l-.052-14.896-5.966-5.007H3.124a.1.1 0 0 0-.1.1Z"
      />
    </svg>
  );
};
export default Simcard_01;
