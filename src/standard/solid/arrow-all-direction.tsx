import React from "react";
const ArrowAllDirection: React.FC<
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
        d="M12.001 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M2 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m12 0a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1m-1.999 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.294 2.293a1 1 0 0 1 1.415 0l3 3a1 1 0 0 1-1.415 1.414l-2.293-2.293L9.71 6.707a1 1 0 0 1-1.415-1.414zM8.294 17.292a1 1 0 0 1 1.415 0L12 19.585l2.293-2.293a1 1 0 0 1 1.415 1.415l-3 3a1 1 0 0 1-1.415 0l-3-3a1 1 0 0 1 0-1.415M17.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.415-1.414L19.586 12l-2.293-2.293a1 1 0 0 1 0-1.414M6.707 8.293a1 1 0 0 1 0 1.414L4.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowAllDirection;
