import React from "react";
const EthereumEllipse: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1m.002 4c.145 0 .281.07.364.19l3.845 5.492-4.21 1.692-4.22-1.675 3.857-5.51A.44.44 0 0 1 11.752 5m.166 8.635 4.41-1.774a.4.4 0 0 1-.063.135l-4.149 5.926a.445.445 0 0 1-.728 0l-4.149-5.926a.4.4 0 0 1-.055-.109l4.404 1.749a.44.44 0 0 0 .33-.001"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EthereumEllipse;
