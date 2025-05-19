import React from "react";
const Ethereum: React.FC<
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
        d="M12.604 1.57A.73.73 0 0 0 12 1.25c-.24 0-.466.12-.604.32l-6.608 9.6L12 14.19l7.212-3.02zm6.646 11.206-6.97 2.918a.73.73 0 0 1-.56 0l-6.97-2.919 6.646 9.655c.138.2.363.32.604.32.24 0 .466-.12.604-.32z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ethereum;
