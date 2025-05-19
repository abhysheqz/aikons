import React from "react";
const SunCloudAngledZap_01: React.FC<
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
        d="M5.844 4A2.85 2.85 0 0 0 3 6.857c0 .96.471 1.81 1.197 2.33a1 1 0 0 1-1.163 1.627A4.86 4.86 0 0 1 1 6.857 4.85 4.85 0 0 1 5.844 2c1.65 0 3.105.827 3.977 2.084A1 1 0 1 1 8.18 5.225 2.84 2.84 0 0 0 5.844 4M13.09 13.14a1 1 0 0 1 .348 1.37l-1.181 1.99H13.5a1 1 0 0 1 .86 1.51l-2.078 3.5a1 1 0 0 1-1.72-1.02l1.181-1.99H10.5a1 1 0 0 1-.86-1.51l2.079-3.5a1 1 0 0 1 1.37-.35"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 14a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 17.5 19.75h-2.428l.578-.974a2.5 2.5 0 0 0-.942-3.465l.02-.034a2.5 2.5 0 1 0-4.299-2.554l-2.078 3.5a2.5 2.5 0 0 0 .942 3.466l-.02.035-.016.026H7A5.75 5.75 0 0 1 1.25 14"
      />
    </svg>
  );
};
export default SunCloudAngledZap_01;
