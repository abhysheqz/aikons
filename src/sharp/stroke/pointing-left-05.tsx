import React from "react";
const PointingLeft_05: React.FC<
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
        strokeWidth={1.5}
        d="M8 4.61H2.63m1.87-2.5L2 4.61l2.5 2.5M22 10.114h-2.005L14.123 5.71l-.1-.075c-.413-.32-.911-.576-1.43-.516-.8.092-1.458.685-1.57 1.453-.066.45.065 1.061.444 1.474l2.125 2.098-1.723-.031H3.566c-.864 0-1.565.674-1.565 1.506s.7 1.506 1.565 1.506h8.42m-3.497.58.046 1.11c.125.827.7 1.237 1.414 1.276l2.56.02m-3.005.351v1.101c-.032.851.694 1.57 1.538 1.542h1.975m-1.998.606.023.995c.018.801.685 1.378 1.517 1.378l2.41.023c.682-.032 1.807-.01 2.612-.251.169-.051.325-.137.473-.233l.31-.2.572-.437 1.066-.875h1.997"
      />
    </svg>
  );
};
export default PointingLeft_05;
