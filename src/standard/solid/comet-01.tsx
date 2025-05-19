import React from "react";
const Comet_01: React.FC<
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
        d="M12.707 1.293a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414-1.414l5.5-5.5a1 1 0 0 1 1.414 0m-7.95 8.05a1 1 0 0 1 0 1.415 6 6 0 0 0 8.486 8.485l3.949-3.95a1 1 0 0 1 1.414 1.415l-3.95 3.95A8 8 0 0 1 3.344 9.343a1 1 0 0 1 1.414 0m17.95 1.95a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.172 12.172a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.707 1.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0M14.72 5.305a1 1 0 0 1-.024 1.414l-7 6.76a1 1 0 0 1-1.39-1.44l7-6.758a1 1 0 0 1 1.414.024m7.988-.012a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Comet_01;
