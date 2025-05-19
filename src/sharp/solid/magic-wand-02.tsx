import React from "react";
const MagicWand_02: React.FC<
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
        d="m19.293 20.707-4-4 1.414-1.414 4 4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.73 1.3a.75.75 0 0 1 .478.664l.29 6.103 5.837 2.918a.75.75 0 0 1-.117 1.388l-6.78 2.064-2.065 6.781a.75.75 0 0 1-1.388.117L8.067 15.5l-6.103-.29a.75.75 0 0 1-.494-1.28l4.01-4.011-2.308-5.77a.75.75 0 0 1 .975-.975l5.77 2.308L13.93 1.47a.75.75 0 0 1 .8-.17"
      />
    </svg>
  );
};
export default MagicWand_02;
