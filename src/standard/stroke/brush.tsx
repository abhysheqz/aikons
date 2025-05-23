import React from "react";
const Brush: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.186 9.792 2.977 2.957M9.87 16.619c1.294-1.034 3.094-2.678 4.54-4.115 4.384-4.355 7.271-8.547 6.45-9.364-.823-.817-5.043 2.052-9.427 6.407-1.446 1.436-3.101 3.225-4.142 4.51m1.661 5.347C6.721 21.621 3 20.882 3 20.882c1.116-2.588-.372-4.066 1.488-5.915a3.17 3.17 0 0 1 4.465 0 3.12 3.12 0 0 1 0 4.436Z"
      />
    </svg>
  );
};
export default Brush;
