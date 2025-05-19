import React from "react";
const GoogleHome: React.FC<
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
        d="M6.318 2.25c-.357 0-.724.109-1.03.343-2.564 1.96-4.038 5.135-4.038 8.546 0 5.897 4.881 10.616 10.742 10.616 5.869 0 10.611-4.649 10.76-10.523v-.019c0-1.642-.224-3.103-.858-4.505-.632-1.4-1.647-2.688-3.15-4.025a1.73 1.73 0 0 0-1.148-.433zm11.244 1.5c-3.19-.685-7.844-.77-11.117 0 .363.373.95.759 1.768 1.074 1.01.388 2.305.641 3.79.641 1.486 0 2.782-.253 3.791-.641.819-.315 1.405-.701 1.768-1.074"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoogleHome;
