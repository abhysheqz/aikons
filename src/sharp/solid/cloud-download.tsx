import React from "react";
const CloudDownload: React.FC<
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
        d="m12 22 3.707-3.707-1.414-1.414L13 18.172v-5.586h-2v5.586l-1.293-1.293-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 7.115a5.752 5.752 0 0 0 .333 11.328L9.5 15.129V11.25h5v3.879l3.329 3.328-.035.035a5.25 5.25 0 0 0 .453-10.44 6.25 6.25 0 0 0-12.394-.937"
      />
    </svg>
  );
};
export default CloudDownload;
