import React from "react";
const Doctor_02: React.FC<
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
        d="M3.25 17.823c.145-.218.677-1.06.97-1.353.581-.582 1.51-1.22 2.78-1.22h2.375L12 18.75l2.625-3.5H17c1.27 0 2.199.638 2.78 1.22.293.293.825 1.135.97 1.353v4.927H3.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.688 8.071V10c0 2.612-2.088 4.75-4.688 4.75S7.313 12.612 7.313 10V8.07l-1.063-5.5V1.25h11.5v1.322zm-7.875.679V10c0 1.806 1.439 3.25 3.188 3.25s3.187-1.444 3.187-3.25V8.75zm3.937-4.5v-1.5h-1.5v1.5h-1.5v1.5h1.5v1.5h1.5v-1.5h1.5v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Doctor_02;
