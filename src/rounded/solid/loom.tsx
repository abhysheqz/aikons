import React from "react";
const Loom: React.FC<
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
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m0 11a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M21 12a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1m-11 0a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h5a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.794 7.5a1 1 0 0 1-.366 1.366l-4.33 2.5a1 1 0 1 1-1-1.732l4.33-2.5a1 1 0 0 1 1.366.366M10.268 13a1 1 0 0 1-.367 1.366l-4.33 2.5a1 1 0 0 1-1-1.732l4.33-2.5a1 1 0 0 1 1.367.366M16.5 19.794a1 1 0 0 1-1.366-.366l-2.5-4.33a1 1 0 1 1 1.732-1l2.5 4.33a1 1 0 0 1-.366 1.366M11 10.268a1 1 0 0 1-1.366-.366l-2.5-4.33a1 1 0 1 1 1.732-1l2.5 4.33A1 1 0 0 1 11 10.268"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 4.206a1 1 0 0 1 .366 1.366l-2.5 4.33a1 1 0 1 1-1.732-1l2.5-4.33a1 1 0 0 1 1.366-.366M11 13.732a1 1 0 0 1 .366 1.366l-2.5 4.33a1 1 0 1 1-1.732-1l2.5-4.33A1 1 0 0 1 11 13.732M19.794 16.5a1 1 0 0 1-1.366.366l-4.33-2.5a1 1 0 1 1 1-1.732l4.33 2.5a1 1 0 0 1 .366 1.366M10.268 11a1 1 0 0 1-1.367.366l-4.33-2.5a1 1 0 1 1 1-1.732l4.33 2.5A1 1 0 0 1 10.268 11"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Loom;
