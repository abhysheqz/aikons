import React from "react";
const FolderShared_03: React.FC<
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
        d="M12.362 4.75 9.866 1.857a1.75 1.75 0 0 0-1.325-.607H3A1.75 1.75 0 0 0 1.25 3v13A2.75 2.75 0 0 0 4 18.75h7.006v2H3.5a1 1 0 1 0 0 2h17a1 1 0 1 0 0-2h-7.494v-2H20A2.75 2.75 0 0 0 22.75 16V7.5A2.75 2.75 0 0 0 20 4.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FolderShared_03;
