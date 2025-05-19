import React from "react";
const Discount: React.FC<
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
        d="M10.88 1.957a1.75 1.75 0 0 1 2.24 0l2.082 1.735a.25.25 0 0 0 .16.058H18.5c.966 0 1.75.784 1.75 1.75v3.138c0 .058.02.115.058.16l1.735 2.082a1.75 1.75 0 0 1 0 2.24l-1.735 2.082a.25.25 0 0 0-.058.16V18.5a1.75 1.75 0 0 1-1.75 1.75h-3.138a.25.25 0 0 0-.16.058l-2.082 1.735a1.75 1.75 0 0 1-2.24 0l-2.082-1.735a.25.25 0 0 0-.16-.058H5.5a1.75 1.75 0 0 1-1.75-1.75v-3.138a.25.25 0 0 0-.058-.16L1.957 13.12a1.75 1.75 0 0 1 0-2.24l1.735-2.082a.25.25 0 0 0 .058-.16V5.5c0-.966.783-1.75 1.75-1.75h3.138a.25.25 0 0 0 .16-.058zm2.913 6.836a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414-1.414zM9.51 8.5H9.5a1 1 0 1 0 0 2h.01a1 1 0 0 0 0-2m4.989 5h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Discount;
