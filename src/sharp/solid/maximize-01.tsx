import React from "react";
const Maximize_01: React.FC<
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
        d="m10.602 20.266-4.304-5.307a2.38 2.38 0 0 1-.01-3.023 2.46 2.46 0 0 1 3.446-.349l1.604 1.092 1.861-8.608.005-.017a2.45 2.45 0 0 1 2.372-1.804c1.53 0 2.714 1.38 2.404 2.896L17.1 9.46c1.657.227 3.59.885 5.24 2.463.95.908 1.006 2.243.833 3.338-.177 1.127-.631 2.242-1.004 2.982-.196.388-.476.919-.705 1.348l-.292.545-.03.054v2.561h-10.54z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.335 3.25H5.75v-2h5v5h-2V4.664L7.345 6.068 5.931 4.654zm-6.585 3h2v1.585l1.403-1.403 1.415 1.414L4.164 9.25H5.75v2h-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Maximize_01;
