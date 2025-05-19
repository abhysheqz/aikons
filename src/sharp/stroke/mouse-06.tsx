import React from "react";
const Mouse_06: React.FC<
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
        d="m22 5.5-1 1.833L14.5 3.5 13 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.333 12.821c-.77 1.657-.174 3.79 1.472 5.009.606.448 1.235.88 1.902 1.268a20 20 0 0 0 2.044 1.02c1.875.822 4.011.274 5.055-1.224.724-1.038 1.447-2.114 2.104-3.257s1.223-2.31 1.757-3.458c.77-1.657.174-3.79-1.473-5.009a20 20 0 0 0-1.901-1.268 20 20 0 0 0-2.044-1.02c-1.875-.822-4.011-.274-5.056 1.224C5.47 7.144 4.747 8.22 4.09 9.363s-1.223 2.31-1.757 3.458ZM12 8l-1.367 2.134"
      />
    </svg>
  );
};
export default Mouse_06;
