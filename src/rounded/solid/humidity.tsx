import React from "react";
const Humidity: React.FC<
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
        d="M15.013 2.469a4.334 4.334 0 0 0-6.026 0C7.733 3.664 6.19 5.316 4.957 7.216 3.73 9.106 2.75 11.326 2.75 13.64c0 4.485 3.509 9.11 9.25 9.11s9.25-4.625 9.25-9.11c0-2.313-.98-4.535-2.207-6.424-1.234-1.9-2.776-3.552-4.03-4.747m-4.685 1.417a2.39 2.39 0 0 1 3.344 0c1.193 1.137 2.619 2.672 3.74 4.398 1.073 1.652 1.816 3.401 1.885 5.096-1.273.656-3.74 1.181-6.823-.55-2.91-1.635-5.466-1.963-7.289-1.788.334-.932.82-1.86 1.404-2.758 1.12-1.726 2.546-3.26 3.739-4.398"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Humidity;
