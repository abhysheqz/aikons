import React from "react";
const Watch_02: React.FC<
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
        d="m15.585 1.25 1.142 4.568-1.456.364-.857-3.432h-4.83l-.857 3.432-1.456-.364L8.414 1.25zM15.585 22.75l1.142-4.568-1.456-.364-.857 3.432h-4.83l-.857-3.432-1.456.364 1.143 4.568z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 5.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75zM13 9v2.59l1.206 1.202-1.412 1.416L11 12.42V9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Watch_02;
