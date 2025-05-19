import React from "react";
const MapsLocation_02: React.FC<
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
        d="m13.24 20.057-4.49-1.925V1.5l5.5 2.357v7.15a6.3 6.3 0 0 0-2.5 5.033c0 1.737.716 3.04 1.49 4.017M22.75 11.952A6.21 6.21 0 0 0 18 9.75c-.795 0-1.553.149-2.25.42V4.244H21c.966 0 1.75.783 1.75 1.75zM7.25 1.531 2.217 4.047a1.75 1.75 0 0 0-.967 1.566v11.994a1.75 1.75 0 0 0 2.303 1.66l3.697-1.232z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 11.25c-2.63 0-4.75 2.152-4.75 4.79 0 1.463.674 2.538 1.446 3.42.338.386.711.752 1.061 1.095l.13.128c.397.39.76.756 1.071 1.142.523.65 1.548.673 2.091.022.321-.384.69-.754 1.09-1.15l.043-.043c.378-.375.781-.775 1.145-1.201.763-.893 1.423-1.978 1.423-3.413 0-2.638-2.12-4.79-4.75-4.79m0 3a1.75 1.75 0 1 0 0 3.5h.009a1.75 1.75 0 1 0 0-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MapsLocation_02;
