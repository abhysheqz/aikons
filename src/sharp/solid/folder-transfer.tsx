import React from "react";
const FolderTransfer: React.FC<
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
        d="M14.25 2.504h1c2.29 0 4.091.659 5.308 1.968 1.204 1.296 1.692 3.076 1.692 5.029v1h-1.803l-2.584-1.723 1.11-1.663 1.114.742c-.185-.843-.523-1.517-.995-2.024-.733-.79-1.933-1.33-3.842-1.33h-1zM1.75 13.5h1.803l2.584 1.721-1.11 1.664-1.114-.743c.185.843.523 1.517.995 2.025.733.79 1.933 1.33 3.842 1.33h1v1.999h-1c-2.29 0-4.091-.66-5.308-1.969C2.238 18.231 1.75 16.451 1.75 14.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m6.965 1.75 1 2.014 5.285-.012v8.498H1.75V1.755zM17.035 11.75l5.215.005V22.25h-11.5v-8.498l5.285.012z"
      />
    </svg>
  );
};
export default FolderTransfer;
