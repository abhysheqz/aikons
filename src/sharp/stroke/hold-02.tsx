import React from "react";
const Hold_02: React.FC<
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
        d="M7.65 11.403V5.94c0-.837.662-1.515 1.444-1.515h.045c.782 0 1.416.678 1.416 1.515v2.986m0-2.895v-.59c0-.837.634-1.515 1.416-1.515h.048c.78 0 1.414.675 1.416 1.51l.022 4.494m0-1.895-.017-1.567c0-.836.63-1.534 1.412-1.534h.045c.782 0 1.454.646 1.454 1.483v4.504m-.017-3.368q.015-.106.02-.213c.05-.786.648-1.4 1.396-1.4h.081c.782 0 1.416.679 1.416 1.516v5.466M7.441 7.082c-2.189 2.178-3.23 3.27-3.189 4.717-.021 1.016.892 2.35 3.867 6.132v1.995m11.128-7.052c.059 3.042-.602 3.394-1.994 5.03v2.007"
      />
    </svg>
  );
};
export default Hold_02;
