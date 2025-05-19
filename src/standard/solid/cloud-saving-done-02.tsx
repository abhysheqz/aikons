import React from "react";
const CloudSavingDone_02: React.FC<
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
        d="M5.603 6.115a5.752 5.752 0 0 0-2.306 10.233.75.75 0 0 0 .453.152h.504a7.5 7.5 0 0 1 14.992 0h.504a.75.75 0 0 0 .335-.08c.673-.335 1.267-.988 1.686-1.7.425-.722.729-1.602.729-2.47a5.255 5.255 0 0 0-4.503-5.197 6.25 6.25 0 0 0-12.394-.938M11.75 11a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.576 4.73a.75.75 0 0 0-1.152-.96L11.2 17.139l-.92-.92a.75.75 0 1 0-1.06 1.061l1.5 1.5a.75.75 0 0 0 1.106-.05z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CloudSavingDone_02;
