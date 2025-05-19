import React from "react";
const ContainerTruck_01: React.FC<
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
        d="M15.91 5.697c3.82.25 6.84 3.411 6.84 7.275v5.347h-2.585a3.42 3.42 0 0 1-3.279 2.431 3.42 3.42 0 0 1-3.278-2.43h-3.216a3.42 3.42 0 0 1-3.278 2.43 3.42 3.42 0 0 1-3.281-2.438l-2.583.012V3.25h14.66zm.977 8.247c-.34 0-.668.05-.977.141V7.646c2.74.246 4.886 2.537 4.886 5.326v3.403h-.63a3.42 3.42 0 0 0-3.279-2.43M5.648 17.347c0-.806.657-1.458 1.466-1.458.81 0 1.466.652 1.466 1.458s-.656 1.458-1.466 1.458-1.466-.653-1.466-1.458m11.24-1.458c-.81 0-1.467.652-1.467 1.458s.657 1.458 1.466 1.458c.81 0 1.466-.653 1.466-1.458 0-.806-.656-1.458-1.466-1.458M5.75 7v5h1.5V7zm4 0v5h1.5V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ContainerTruck_01;
