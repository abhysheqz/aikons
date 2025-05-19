import React from "react";
const ImageCrop: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 20H10c-2.828 0-4.243 0-5.121-.879C4 18.243 4 16.828 4 14V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 20c3.684-3.564 7.823-8.29 14-4.745"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 4h12c2.828 0 4.243 0 5.121.879C20 5.757 20 7.172 20 10v12"
      />
      <circle
        cx={8.5}
        cy={8.5}
        r={1.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default ImageCrop;
