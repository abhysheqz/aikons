import React from "react";
const HandPointingLeft_03: React.FC<
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
        d="M22 8.047h-2.005l-5.872-4.403-.1-.074c-.413-.32-.911-.576-1.43-.516-.8.091-1.458.684-1.57 1.452-.066.45.065 1.062.444 1.475l2.125 2.097-1.723-.03H3.566C2.702 8.047 2 8.721 2 9.553s.7 1.506 1.565 1.506h8.42m-3.497.58.046 1.11c.125.827.7 1.237 1.414 1.276l2.56.02m-3.005.35v1.102c-.032.85.694 1.569 1.538 1.542h1.975m-1.998.606.023.995c.018.8.685 1.378 1.517 1.378l2.41.022c.682-.032 1.807-.01 2.612-.25.169-.052.325-.137.473-.233l.31-.2.572-.437 1.066-.875h1.997"
      />
    </svg>
  );
};
export default HandPointingLeft_03;
