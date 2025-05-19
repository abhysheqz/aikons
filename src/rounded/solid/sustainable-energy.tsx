import React from "react";
const SustainableEnergy: React.FC<
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
        d="M12 3.5a8.5 8.5 0 0 0-1.89.21 1 1 0 0 1-.442-1.95c.75-.17 1.532-.26 2.332-.26 5.799 0 10.5 4.701 10.5 10.5 0 2.65-.982 5.07-2.6 6.917h.6a1 1 0 1 1 0 2h-3.247a1 1 0 0 1-1-1V17a1 1 0 1 1 2 0v.758A8.5 8.5 0 0 0 12 3.5m-9.5.6a1 1 0 0 1 1-1h3.222a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0v-.73a8.5 8.5 0 0 0 8.168 14.02 1 1 0 1 1 .442 1.95c-.75.17-1.532.26-2.332.26-5.799 0-10.5-4.701-10.5-10.5 0-2.642.976-5.056 2.586-6.9H3.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.074 6.18a1 1 0 0 1 .245 1.393L10.921 11H15a1 1 0 0 1 .82 1.573l-3.5 5a1 1 0 0 1-1.64-1.146L13.08 13H9a1 1 0 0 1-.82-1.573l3.5-5a1 1 0 0 1 1.393-.246"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SustainableEnergy;
