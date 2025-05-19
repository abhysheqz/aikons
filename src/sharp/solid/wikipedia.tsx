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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm1.5 6.5h1.034L8.8 17.269a.75.75 0 0 0 1.378.051L12 13.462l1.822 3.858a.75.75 0 0 0 1.378-.052l3.266-8.518H19.5v-1.5H16v1.5h.86l-2.432 6.342-1.599-3.386 1.396-2.956H15v-1.5h-1.25a.75.75 0 0 0-.678.43L12 9.95l-1.072-2.27a.75.75 0 0 0-.678-.43H9v1.5h.775l1.396 2.956-1.6 3.386-2.43-6.342H8v-1.5H4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wikipedia;
