import React from "react";
const Blockchain_04: React.FC<
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
        d="M2 3.75C2 2.784 2.784 2 3.75 2h4c.966 0 1.75.784 1.75 1.75v1h2.25a1 1 0 1 1 0 2H9.5v1A1.75 1.75 0 0 1 7.75 9.5h-4A1.75 1.75 0 0 1 2 7.75zM15.75 2A1.75 1.75 0 0 0 14 3.75v4c0 .966.784 1.75 1.75 1.75h1v2.25a1 1 0 1 0 2 0V9.5h1a1.75 1.75 0 0 0 1.75-1.75v-4A1.75 1.75 0 0 0 19.75 2zm0 12A1.75 1.75 0 0 0 14 15.75v1h-2.25a1 1 0 1 0 0 2H14v1c0 .966.784 1.75 1.75 1.75h4a1.75 1.75 0 0 0 1.75-1.75v-4A1.75 1.75 0 0 0 19.75 14zm-12 0A1.75 1.75 0 0 0 2 15.75v4c0 .966.784 1.75 1.75 1.75h4a1.75 1.75 0 0 0 1.75-1.75v-4A1.75 1.75 0 0 0 7.75 14h-1v-2.25a1 1 0 1 0-2 0V14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_04;
