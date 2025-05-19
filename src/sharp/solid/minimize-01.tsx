import React from "react";
const Minimize_01: React.FC<
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
        d="M10.603 20.766 6.297 15.46a2.38 2.38 0 0 1-.009-3.024 2.46 2.46 0 0 1 3.446-.349l1.603 1.092L13.2 4.572l.005-.018a2.45 2.45 0 0 1 2.372-1.804c1.53 0 2.714 1.38 2.404 2.896L17.1 9.96c1.657.227 3.59.885 5.24 2.463.95.908 1.006 2.243.834 3.338-.178 1.127-.632 2.242-1.005 2.982-.196.388-.476.919-.705 1.348l-.292.545-.03.055v2.56h-10.54zM6.75.75h2v1.586L10.336.75l1.414 1.414-1.586 1.586h1.586v2h-5zM3.75 11.75v-1.586L2.164 11.75.75 10.336 2.336 8.75H.75v-2h5v5z"
      />
    </svg>
  );
};
export default Minimize_01;
