import React from "react";
const LockSync_02: React.FC<
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
        d="M12.025 3C7.038 3 3 7.032 3 12s4.038 9 9.025 9c3.7 0 6.882-2.22 8.274-5.401a1 1 0 0 1 1.832.802 11.03 11.03 0 0 1-10.106 6.6C5.938 23 1 18.077 1 12 1 5.922 5.938 1 12.025 1c4.688 0 8.692 2.919 10.286 7.034.35.904.584 1.866.684 2.866a1 1 0 0 1-1.367 1.028l-2.5-1a1 1 0 0 1-.277-1.69l1.317-1.124A9.03 9.03 0 0 0 12.025 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.321 9.39c0-1.472 1.214-2.64 2.679-2.64s2.679 1.168 2.679 2.64v1.587a3.64 3.64 0 0 1 1.071 2.583c0 2.052-1.693 3.69-3.75 3.69s-3.75-1.638-3.75-3.69c0-1.01.41-1.92 1.071-2.583zm1.5.666a3.8 3.8 0 0 1 2.358 0V9.39c0-.615-.514-1.14-1.179-1.14s-1.179.525-1.179 1.14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockSync_02;
