import React from "react";
const EaseIn: React.FC<
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
        d="m20.084 3.6-.003.007-.014.03a17 17 0 0 1-.288.613 39 39 0 0 1-.92 1.767 41 41 0 0 1-3.522 5.367C12.251 15.334 8.011 19 3 19a1 1 0 1 0 0 2c5.99 0 10.749-4.334 13.913-8.384a43 43 0 0 0 3.697-5.633 41 41 0 0 0 1.217-2.385l.065-.143.017-.038.005-.011.002-.004L21 4l.916.402a1 1 0 0 0-1.832-.803"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EaseIn;
