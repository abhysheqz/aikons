import React from "react";
const Ruler: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.568 21.361 10.793-10.793a2.18 2.18 0 0 0 0-3.084L16.516 2.64a2.18 2.18 0 0 0-3.084 0L2.639 13.432a2.18 2.18 0 0 0 0 3.084l4.845 4.845a2.18 2.18 0 0 0 3.084 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m17 10 2 2m-5.5 1.5 2 2M10 17l2 2"
      />
    </svg>
  );
};
export default Ruler;
