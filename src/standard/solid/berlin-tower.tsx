import React from "react";
const BerlinTower: React.FC<
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
        d="M12 14a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 10a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M14.702 13.046a1 1 0 0 1 1.253.656l2.5 8a1 1 0 1 1-1.91.596l-2.5-8a1 1 0 0 1 .657-1.252M9.299 13.046a1 1 0 0 1 .656 1.253l-2.5 8a1 1 0 1 1-1.91-.597l2.5-8a1 1 0 0 1 1.254-.656"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BerlinTower;
