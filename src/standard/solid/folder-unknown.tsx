import React from "react";
const FolderUnknown: React.FC<
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
        d="M19.247 11.75a1.5 1.5 0 0 0-1.5 1.5 1 1 0 1 1-2 0 3.5 3.5 0 1 1 5.477 2.889c-.313.214-.577.43-.756.646-.176.212-.218.36-.218.463a1 1 0 1 1-2 .004c-.001-.725.32-1.311.678-1.743.354-.428.796-.767 1.166-1.02a1.5 1.5 0 0 0-.847-2.739m.003 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h13.236a2.246 2.246 0 0 1 .602-2.75 2.25 2.25 0 0 1-.836-1.746 3.77 3.77 0 0 1 .51-1.887 2.25 2.25 0 0 1-3.014-2.117 4.75 4.75 0 0 1 8.252-3.211V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderUnknown;
