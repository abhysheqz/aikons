import React from "react";
const PackageOpen: React.FC<
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
        d="M12 9.95 5.704 7.151a.973.973 0 0 0 .332-1.43L6 5.67c-.29-.4-.824-.538-1.271-.327l-1.892.894a1 1 0 0 0-.584 1.057v10.83a.75.75 0 0 0 .446.685l8.996 4a.75.75 0 0 0 .609 0l9.004-4a.75.75 0 0 0 .445-.685V7.222q.003-.035.003-.07a1 1 0 0 0-.594-.914l-1.836-.95a1.065 1.065 0 0 0-1.085 1.828l.053.036zm-6.671 1.84a.75.75 0 0 1 1.006-.336l2 1a.75.75 0 1 1-.67 1.342l-2-1a.75.75 0 0 1-.336-1.006"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.125a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-4.6 1.2a1 1 0 0 1 1.4.2l1.5 2a1 1 0 0 1-1.6 1.2l-1.5-2a1 1 0 0 1 .2-1.4m9.2 0a1 1 0 0 1 .2 1.4l-1.5 2a1 1 0 0 1-1.6-1.2l1.5-2a1 1 0 0 1 1.4-.2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageOpen;
