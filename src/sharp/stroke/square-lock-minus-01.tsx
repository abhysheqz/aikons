import React from "react";
const SquareLockMinus_01: React.FC<
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
        d="M12.998 19.004h8M18.993 15.033v-6.01H15.49M11 22H3.002V9.023h3.47m9.019 0v-2.7c-.177-3.1-2.666-4.225-4.283-4.316C9.333 1.9 6.603 3.302 6.514 6.302l-.042 2.721m9.019 0H6.472"
      />
    </svg>
  );
};
export default SquareLockMinus_01;
