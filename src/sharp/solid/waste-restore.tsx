import React from "react";
const WasteRestore: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.532 1.25H18a1 1 0 0 1 .949.684l.772 2.316H21.5v2h-20v-2h7.532zm.103 3h5.978l-.334-1h-4.81zM13.183 15.221a4.67 4.67 0 0 1 7.919.48l-1.644.92a2.81 2.81 0 0 0-1.736-1.373c-1.503-.407-3.048.495-3.45 2.015l-.187.703h-1.577L11 15.125l1.655-.898zm8.417 2.813H19.9l-.186.704c-.403 1.52-1.948 2.422-3.451 2.014a2.8 2.8 0 0 1-1.711-1.327l-1.627.95a4.7 4.7 0 0 0 2.852 2.212 4.67 4.67 0 0 0 5.05-1.843l.488 1L23 20.903z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.454 4.485A.75.75 0 0 1 4 4.25h15a.75.75 0 0 1 .749.794l-.422 7.167a6.134 6.134 0 0 0-5.74.57l-.316-.596-4.292 2.33 2.604 4.907-.696.406.737 1.29a6.3 6.3 0 0 0 1.342 1.632H5.001a.75.75 0 0 1-.749-.706l-1-17a.75.75 0 0 1 .202-.559"
      />
    </svg>
  );
};
export default WasteRestore;
