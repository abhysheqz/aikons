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
        fill="currentColor"
        d="M15.258 1.47a.75.75 0 0 0-1.061 0L1.47 14.197a.75.75 0 0 0 0 1.06l7.272 7.273a.75.75 0 0 0 1.061 0l2.333-2.332-2.167-2.168 1.06-1.06 2.168 2.167 2.439-2.44-2.167-2.167 1.06-1.06 2.168 2.167 2.439-2.44-2.167-2.167 1.06-1.06 2.168 2.167 2.333-2.334a.75.75 0 0 0 0-1.06z"
      />
    </svg>
  );
};
export default Ruler;
