import React from "react";
const DentalBrokenTooth: React.FC<
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
        d="M14.994 6c-.5.5-1.505.412-3.003-.824m0 0q.332-.273.69-.626c2.308-2.284 5.396-1.837 6.868 0 1.018 1.27 3.73 4.938-2.695 15.69-.264.466-.79.76-1.356.76-.903 0-1.608-.72-1.638-1.56-.062-1.782-.408-3.836-1.87-3.836-1.461 0-1.807 2.054-1.87 3.836-.028.84-.734 1.56-1.637 1.56-.566 0-1.092-.294-1.356-.76-3.114-5.505-4.135-8.94-4.135-11.822 2.299 0 2.976-1.156 2.976-2.57 1.699-.127 2.935-.515 3.01-2.85m3.013 2.178c-.222-.182-1.648-1.551-1.886-1.787-.498-.493-1.226-.384-1.87-.384"
      />
    </svg>
  );
};
export default DentalBrokenTooth;
