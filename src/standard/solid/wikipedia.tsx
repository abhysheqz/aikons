import React from "react";
const Wikipedia: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm.5 5.5a.75.75 0 0 0 0 1.5h.534L8.8 17.269a.75.75 0 0 0 1.378.051L12 13.462l1.822 3.858a.75.75 0 0 0 1.378-.052l3.266-8.518H19a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0-.136 1.488l-2.436 6.354-1.599-3.386 1.396-2.956h.275a.75.75 0 0 0 0-1.5h-.75a.75.75 0 0 0-.678.43L12 9.95l-1.072-2.27a.75.75 0 0 0-.678-.43H9.5a.75.75 0 0 0 0 1.5h.275l1.396 2.956-1.6 3.386-2.435-6.354A.75.75 0 0 0 7 7.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wikipedia;
