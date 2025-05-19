import React from "react";
const CheckUnread_03: React.FC<
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
        d="M5.707 4.293a1 1 0 0 0-1.414 1.414l7.204 7.205-3.014 3.157-2.776-2.776a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.43-.017l3.689-3.864 5.38 5.381a1 1 0 0 0 1.415-1.414l-6.102-6.102-.004-.005zM19.723 7.19a1 1 0 0 0-1.446-1.38l-3.818 4a1 1 0 1 0 1.446 1.38z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckUnread_03;
