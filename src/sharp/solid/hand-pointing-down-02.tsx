import React from "react";
const HandPointingDown_02: React.FC<
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
        d="M16.5 1.75a3.75 3.75 0 0 1 3.75 3.75v6a3.75 3.75 0 0 1-3.75 3.75h-4.834v4.5a2.5 2.5 0 0 1-5 0v-5.968l-1.021-1.167c-.46-.525-.834-.953-1.113-1.33-.291-.393-.511-.773-.637-1.213a3.8 3.8 0 0 1-.144-1.12c.009-.378.043-.781.211-1.281.164-.486.443-1.031.898-1.724L7.593 1.75z"
      />
    </svg>
  );
};
export default HandPointingDown_02;
