import React from "react";
const Notification_03: React.FC<
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
        d="M3.75 9.5a8.25 8.25 0 1 1 16.5 0v2.172c0 .331.132.649.366.883l1.414 1.415c.141.14.22.331.22.53v1.382a1.71 1.71 0 0 1-1 1.567c-1.64.738-4.726 1.801-9.25 1.801s-7.61-1.063-9.25-1.801a1.71 1.71 0 0 1-1-1.567V14.5a.75.75 0 0 1 .22-.53l1.414-1.415a1.25 1.25 0 0 0 .366-.883z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.682 20.688a.75.75 0 0 1-.22.904c-.932.726-2.146 1.157-3.462 1.157s-2.53-.43-3.461-1.157a.75.75 0 0 1-.22-.904c.044-.098.154-.14.261-.125.542.074 2.252.295 3.42.295s2.878-.22 3.42-.295c.107-.014.217.027.262.125"
      />
    </svg>
  );
};
export default Notification_03;
