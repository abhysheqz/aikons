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
        fillRule="evenodd"
        d="M9.584 1.75H16a3.75 3.75 0 0 1 3.75 3.75v5A3.75 3.75 0 0 1 16 14.25h-3.75v5.5a2.5 2.5 0 0 1-5 0v-5.953l-1.068-1.14-.017-.019-.02-.023c-.46-.525-.834-.953-1.113-1.33-.291-.393-.511-.773-.637-1.213a3.8 3.8 0 0 1-.144-1.12c.009-.378.043-.781.211-1.281.164-.486.443-1.031.898-1.724l1.92-2.948A2.75 2.75 0 0 1 9.584 1.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandPointingDown_02;
