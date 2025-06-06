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
        d="M12 3.5a8.6 8.6 0 0 0-1.343.105 1 1 0 0 1-.314-1.975A10.6 10.6 0 0 1 12 1.5c5.799 0 10.5 4.701 10.5 10.5 0 2.703-1.086 5.151-2.776 7h.776a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v.912c1.526-1.54 2.5-3.63 2.5-5.912A8.5 8.5 0 0 0 12 3.5M2.5 4a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.952A8.28 8.28 0 0 0 3.5 12a8.5 8.5 0 0 0 9.843 8.395 1 1 0 0 1 .314 1.975q-.811.13-1.657.13C6.201 22.5 1.5 17.799 1.5 12c0-2.726 1.038-5.162 2.732-7H3.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.512 6.43a.75.75 0 0 1 .976 0l.002.002.002.002.01.008.033.03q.043.036.12.107a17.373 17.373 0 0 1 1.674 1.757c.457.555.93 1.21 1.29 1.905.357.689.631 1.467.631 2.259a4.25 4.25 0 0 1-8.5 0c0-.792.274-1.57.631-2.26.36-.695.833-1.349 1.29-1.904a17.4 17.4 0 0 1 1.794-1.864l.033-.03.01-.008.002-.002z"
      />
    </svg>
  );
};
export default WaterEnergy;
