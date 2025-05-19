import React from "react";
const AiLaptop: React.FC<
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
        d="M14.75 3V1.25h1.5V3h1.5V1.25h1.5V3h1.5v1.5h1.75V6h-1.75v1.5h1.75V9h-1.75v1.5h-1.5v1.75h-1.5V10.5h-1.5v1.75h-1.5V10.5h-1.5V9H11.5V7.5h1.75V6H11.5V4.5h1.75V3z"
      />
      <path
        fill="currentColor"
        d="m22.712 21.506-1.917-6.702v-.84H5.16V4.202h5.841L11 2.25H3.204v12.554l-1.916 6.702a.975.975 0 0 0 .94 1.244h19.545a.978.978 0 0 0 .94-1.244"
      />
    </svg>
  );
};
export default AiLaptop;
