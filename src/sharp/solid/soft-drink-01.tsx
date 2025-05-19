import React from "react";
const SoftDrink_01: React.FC<
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
        d="M11.47 1.47a.75.75 0 0 1 .53-.22h6v1.5h-5.25V7h-1.5V2a.75.75 0 0 1 .22-.53"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m17.779 16.75-.6 6H6.82l-.6-6zM17.929 15.25H6.07l-.25-2.5H18.18zM18.329 11.25H5.67l-.35-3.5H4v-1.5h16v1.5h-1.321z"
      />
    </svg>
  );
};
export default SoftDrink_01;
