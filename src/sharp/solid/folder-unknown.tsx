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
        d="M19.249 12.25a1.5 1.5 0 0 0-1.501 1.5v1h-2v-1a3.5 3.5 0 1 1 5.478 2.889c-.313.214-.577.43-.757.646-.175.212-.217.36-.217.463l.002 1-2 .004-.002-1c-.002-.725.32-1.311.678-1.743.354-.428.796-.767 1.166-1.02a1.5 1.5 0 0 0-.847-2.739m1.003 8v1.5h-2v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h15.752v-3.996A3.74 3.74 0 0 1 17.439 16h-2.941v-2.25a4.75 4.75 0 0 1 8.252-3.211V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderUnknown;
