import React from "react";
const CheckList: React.FC<
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
        d="M21.502 7h-10V5h10zM21.502 13h-10v-2h10zM21.502 19h-10v-2h10zM9.05 4.147l-4.208 6.011L2.5 7.648l1.462-1.364.658.705L7.412 3zM9.05 14.989 4.842 21 2.5 18.49l1.462-1.364.658.704 2.792-3.988z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckList;
