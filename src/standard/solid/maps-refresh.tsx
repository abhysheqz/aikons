import React from "react";
const MapsRefresh: React.FC<
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
        d="M18.776 15.103a3 3 0 0 0-2.553.481 1 1 0 0 1-1.183-1.612 4.999 4.999 0 0 1 7.79 5.322 1 1 0 0 1-1.226.707l-1.448-.388a1 1 0 0 1 .517-1.932l.318.085a3 3 0 0 0-2.215-2.663m-5.604 1.603A1 1 0 0 1 14.396 16l1.449.388a1 1 0 0 1-.518 1.932l-.317-.085a3 3 0 0 0 4.767 2.182 1 1 0 0 1 1.184 1.612 4.999 4.999 0 0 1-7.79-5.322"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.649 19.382 8.75 18.14V1.508l5.5 2.357v8.827l-.098.07a2.5 2.5 0 0 0-1.018 1.913c-.671.294-1.207.88-1.411 1.642a6.5 6.5 0 0 0-.074 3.065M15.75 11.903v-7.65H21c.966 0 1.75.783 1.75 1.75v7.56a6.47 6.47 0 0 0-3.068-1.84 6.47 6.47 0 0 0-3.932.18M7.25 1.539 2.217 4.055A1.75 1.75 0 0 0 1.25 5.62v11.995a1.75 1.75 0 0 0 2.303 1.66l3.697-1.232z"
      />
    </svg>
  );
};
export default MapsRefresh;
