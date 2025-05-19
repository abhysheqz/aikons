import React from "react";
const CloudMidSnow: React.FC<
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
        d="M11 16.509V14.75h2v1.759l1.496-.873 1.008 1.728-1.52.886 1.52.886-1.008 1.728L13 19.99v1.759h-2v-1.759l-1.496.873-1.008-1.728 1.52-.886-1.52-.886 1.008-1.728z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 7.365a5.752 5.752 0 0 0 .858 11.378l-.266-.493 3.056-5h5l3.055 5-.27.5h.214a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default CloudMidSnow;
