import React from "react";
const ImageUpload_01: React.FC<
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
        d="M20.707 4.293 17 .586l-3.707 3.707 1.414 1.414L16 4.414V10h2V4.414l1.293 1.293zM3 3h9.748l-1.293 1.293L14.7 7.539V11.3h4.6V9.42H22V22a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.232 18H20v-3.765l-4.931-3.288z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageUpload_01;
