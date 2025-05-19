import React from "react";
const WaterEnergy: React.FC<
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
        d="M11.512 6.43a.75.75 0 0 1 .976 0l.006.006c.108.098.409.371.577.535.341.334.799.807 1.258 1.365.457.555.93 1.21 1.29 1.905.357.689.631 1.467.631 2.259a4.25 4.25 0 0 1-8.5 0c0-.792.274-1.57.631-2.26.36-.695.833-1.349 1.29-1.904a17.4 17.4 0 0 1 1.835-1.9z"
      />
    </svg>
  );
};
export default WaterEnergy;
