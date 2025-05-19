import React from "react";
const SquareUnlock_02: React.FC<
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
        d="M12 17v-3M16.002 4.995c-.538-1.66-2.174-2.897-3.792-2.988-1.875-.106-4.607 1.295-4.697 4.295l-.04 2.721m0 0H4V22h16V9.023z"
      />
    </svg>
  );
};
export default SquareUnlock_02;
