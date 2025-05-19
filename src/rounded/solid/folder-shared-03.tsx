import React from "react";
const FolderShared_03: React.FC<
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
        d="M12.006 16.75a1 1 0 0 1 1 1v3H20.5a1 1 0 0 1 0 2h-17a1 1 0 1 1 0-2h7.506v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m11.526 3.531.876 1.219h3.653c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v.61c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V6.924c0-.886 0-1.6.051-2.176.053-.594.165-1.114.431-1.588A3.75 3.75 0 0 1 3.16 1.732c.474-.266.994-.378 1.588-.43.576-.052 1.44-.052 2.326-.052.87 0 1.471 0 2.03.178a3.8 3.8 0 0 1 1.092.56c.47.349.822.837 1.33 1.543"
      />
    </svg>
  );
};
export default FolderShared_03;
