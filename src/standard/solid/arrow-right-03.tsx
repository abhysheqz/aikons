import React from "react";
const ArrowRight_03: React.FC<
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
        d="M20 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.707 7.292a1 1 0 1 0-1.414 1.414L13.587 11H4a1 1 0 1 0 0 2h9.585l-2.292 2.292a1 1 0 0 0 1.414 1.414l3.976-3.976a.998.998 0 0 0 .024-1.438z"
      />
    </svg>
  );
};
export default ArrowRight_03;
