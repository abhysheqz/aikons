import React from "react";
const EthereumRectangle: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm7.502 3.5c.145 0 .281.07.364.19l3.845 5.492-4.21 1.692-4.22-1.675 3.857-5.51a.44.44 0 0 1 .364-.189m.166 8.635 4.41-1.774a.4.4 0 0 1-.063.135l-4.149 5.926a.445.445 0 0 1-.728 0l-4.149-5.926a.4.4 0 0 1-.055-.109l4.404 1.749a.44.44 0 0 0 .33-.001"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EthereumRectangle;
