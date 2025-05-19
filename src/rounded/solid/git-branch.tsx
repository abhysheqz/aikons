import React from "react";
const GitBranch: React.FC<
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
        d="M20.588 13.5c.176 0 .392 0 .568-.022h.004c.126-.016.702-.088.976-.653.275-.567-.027-1.067-.092-1.176l-.34-.468c-.294-.376-.7-.89-1.08-1.281a4.4 4.4 0 0 0-.638-.556C19.781 9.204 19.431 9 19 9s-.78.203-.986.344c-.231.16-.448.36-.638.556-.38.39-.786.905-1.08 1.28l-.34.47c-.065.108-.367.608-.092 1.175.274.565.85.637.976.653h.004c.176.022.392.022.568.022z"
      />
      <path
        fill="currentColor"
        d="M18 13.498c-.002 1.168-.014 2.014-.1 2.658-.096.706-.263 1.033-.486 1.256-.222.222-.55.39-1.255.485-.735.099-1.716.1-3.159.1H7a1 1 0 1 0 0 2h6.07c1.355 0 2.471 0 3.355-.118.928-.125 1.747-.397 2.403-1.053.657-.656.928-1.476 1.053-2.403.106-.786.118-1.768.119-2.925z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2.25 19a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitBranch;
