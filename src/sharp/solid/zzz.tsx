import React from "react";
const Zzz: React.FC<
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
        d="M3 3h9v1.914L5.914 11H12v2H3v-1.914L9.086 5H3zm2 12h6v2l-2.667 2H11v2H5v-2l2.667-2H5zm16-7h-8v2h4.838L13 14.032V16h8v-2h-4.838L21 9.968z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zzz;
