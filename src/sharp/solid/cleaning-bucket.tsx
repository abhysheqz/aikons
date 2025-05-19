import React from "react";
const CleaningBucket: React.FC<
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
        d="m21.502 12.25.245-3.192A.75.75 0 0 0 21 8.25h-9.967v4zM6.942 17.975a1 1 0 0 0 .002.083l.308 4A.75.75 0 0 0 8 22.75h12a.75.75 0 0 0 .747-.692l.64-8.308H11.032v4.224z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 8.208c0-.529.426-.958.95-.958h7.6c.525 0 .95.43.95.958v9.584c0 .529-.425.958-.95.958H3.2a.954.954 0 0 1-.95-.958zm1.9.959V13h5.7V9.167zm5.7 5.75h-5.7v1.916h5.7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.897 3.343c1.026-1.25 2.446-2.093 4.079-2.093 1.792 0 3.322 1.014 4.365 2.467 1.045 1.455 1.66 3.414 1.66 5.533h-2c0-1.748-.51-3.288-1.284-4.367-.776-1.08-1.758-1.633-2.741-1.633-.9 0-1.792.46-2.534 1.362-.742.905-1.29 2.212-1.446 3.74l-1.99-.204c.192-1.865.866-3.557 1.89-4.805"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CleaningBucket;
