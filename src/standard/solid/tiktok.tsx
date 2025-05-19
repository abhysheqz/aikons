import React from "react";
const Tiktok: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM14.5 6a1 1 0 1 0-2 0v8.5A2.5 2.5 0 1 1 10 12a1 1 0 1 0 0-2 4.5 4.5 0 1 0 4.5 4.5V9.563a5.37 5.37 0 0 0 3 .937 1 1 0 1 0 0-2c-.76 0-1.535-.29-2.11-.768-.57-.475-.89-1.086-.89-1.732"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tiktok;
