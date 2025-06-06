import React from "react";
const Motorbike_02: React.FC<
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
        d="M19.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16 16.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M4.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M1 16.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.863 4.508a1 1 0 0 1 1.362-.379c1.672.944 2.9 2.031 3.782 3.106 1.394 1.696 1.941 3.378 1.991 4.413a1 1 0 0 1-1.415.957 4.3 4.3 0 0 0-1.8-.388c-2.04 0-3.79 1.362-4.193 3.028-.056.229-.12.495-.183.68-.06.177-.185.51-.495.754a1.5 1.5 0 0 1-.797.302c-.18.02-.393.02-.581.02h-2.948c-.19 0-.404 0-.586-.02a1.5 1.5 0 0 1-.801-.307c-.31-.245-.433-.58-.492-.758a9 9 0 0 1-.177-.681c-.197-.851-.705-1.667-1.38-2.249s-1.45-.873-2.173-.819c-.323.024-.52.023-.682-.013a2 2 0 0 1-.536-.229 51 51 0 0 1-1.322-.748 3 3 0 0 1-1.436-2.46c-.012-.368.08-.823.388-1.19.359-.427.914-.613 1.493-.477l6.919 1.62c2.133-1.279 4.328-2.403 6.878-1.482.286.103.552.195.69.239.088-.026.717-.2.804-.223-.542-.458-1.18-.91-1.931-1.333a1 1 0 0 1-.38-1.363"
      />
    </svg>
  );
};
export default Motorbike_02;
