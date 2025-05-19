import React from "react";
const NeuralNetwork: React.FC<
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
        d="M9.75 4a2.25 2.25 0 1 1 4.412.626l3.521 4.402a3.25 3.25 0 1 1-1.89 3.508l-2.691-.231a2.25 2.25 0 1 1-2.71-2.972l.808-3.23a2.26 2.26 0 0 1-.916-.648L7.21 7.036q.039.227.039.464c0 .994-.527 1.865-1.318 2.348L8.52 16.75a2.74 2.74 0 0 1 1.953.834l4.178-3.134.9 1.2-4.362 3.272q.06.28.061.578a2.75 2.75 0 1 1-4.181-2.349L4.48 10.25a2.75 2.75 0 1 1 2.083-4.568l3.186-1.64zm2.162 5.442c.579.257 1.03.752 1.228 1.36l2.754.237c.126-.407.33-.78.595-1.103l-3.248-4.06a2.2 2.2 0 0 1-.5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NeuralNetwork;
