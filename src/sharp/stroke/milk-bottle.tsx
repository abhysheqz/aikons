import React from "react";
const MilkBottle: React.FC<
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
        d="M10.5 5s-1.602-.03-1.773-.085m0 0c-.635-.206-1.09-.762-1.09-1.415 0-.828.732-1.5 1.636-1.5h5.454c.904 0 1.637.672 1.637 1.5 0 .662-.469 1.224-1.118 1.423m-6.519-.008C7.107 7.885 6 10.377 6 13.777V22h12v-8.223c0-3.4-1.134-5.883-2.754-8.854m0 0C15.083 4.973 13.5 5 13.5 5M6 12l12 3"
      />
    </svg>
  );
};
export default MilkBottle;
