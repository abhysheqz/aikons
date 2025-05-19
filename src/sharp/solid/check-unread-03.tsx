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
        d="m20.5 6.207-5.298 5.536-1.447-1.38 5.298-5.535zm-6.376 6.664L8.43 18.828 3.5 13.903l1.414-1.412 3.484 3.479 4.279-4.478z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.914 3.5 20.5 19.086 19.086 20.5 3.5 4.914z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckUnread_03;
