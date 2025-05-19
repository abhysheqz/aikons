import React from "react";
const CloudAngledZap: React.FC<
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
        d="m11.718 13.729 1.72 1.02-1.182 1.99h3l-2.975 5.01-1.72-1.02 1.182-1.99h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 7.365A5.752 5.752 0 0 0 6.99 18.75l4.203-7.077 4.3 2.553-.603 1.013h3l-2.084 3.511H17.5a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default CloudAngledZap;
