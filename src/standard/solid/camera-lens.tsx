import React from "react";
const CameraLens: React.FC<
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
        d="M21.518 7a10.75 10.75 0 0 0-9.52-5.75c-1.058 0-2.082.153-3.049.439q.049.147.05.311v6c.835-.628 1.874-1 3-1zM2.48 17A10.75 10.75 0 0 0 12 22.75c1.059 0 2.082-.154 3.049-.439a1 1 0 0 1-.05-.311v-6c-.835.628-1.874 1-3 1zM7 2.48A10.75 10.75 0 0 0 1.25 12c0 1.059.153 2.082.439 3.049a1 1 0 0 1 .311-.05h6a4.98 4.98 0 0 1-1-3zM17 21.52A10.75 10.75 0 0 0 22.75 12c0-1.059-.153-2.082-.439-3.049a1 1 0 0 1-.311.05h-6c.628.835 1 1.874 1 3zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
    </svg>
  );
};
export default CameraLens;
