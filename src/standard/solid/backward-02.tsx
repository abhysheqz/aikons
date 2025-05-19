import React from "react";
const Backward_02: React.FC<
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
        d="M9.995 5.487c1.16-.812 2.753.018 2.753 1.434V17.08c0 1.416-1.593 2.245-2.753 1.433l-7.256-5.079a1.75 1.75 0 0 1 0-2.867z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.995 5.487c1.16-.812 2.753.018 2.753 1.434V17.08c0 1.416-1.593 2.245-2.753 1.433l-7.256-5.079a1.75 1.75 0 0 1 0-2.867z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Backward_02;
