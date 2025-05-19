import React from "react";
const SunCloudAngledZap_02: React.FC<
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
        d="M7.455 1a1 1 0 0 1 1 1v.601a4.97 4.97 0 0 1 2.814 1.692A1 1 0 0 1 9.73 5.572a2.95 2.95 0 0 0-4.391-.178A3 3 0 0 0 4.485 7.5c0 .899.39 1.702 1.009 2.253a1 1 0 0 1-1.33 1.494A5 5 0 0 1 2.585 8.5H2a1 1 0 0 1 0-2h.585a5 5 0 0 1 .724-1.758l-.534-.538a1 1 0 1 1 1.42-1.408l.525.528a4.9 4.9 0 0 1 1.735-.723V2a1 1 0 0 1 1-1M13.59 14.14a1 1 0 0 1 .348 1.37l-1.181 1.99H14a1 1 0 0 1 .86 1.51l-2.078 3.5a1 1 0 1 1-1.72-1.02l1.181-1.99H11a1 1 0 0 1-.86-1.51l2.079-3.5a1 1 0 0 1 1.37-.35"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 15a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 17.5 20.75h-1.928l.578-.974a2.5 2.5 0 0 0-.942-3.465l.02-.035a2.5 2.5 0 1 0-4.299-2.553l-2.078 3.5a2.5 2.5 0 0 0 .942 3.466l-.02.034-.016.027H7A5.75 5.75 0 0 1 1.25 15"
      />
    </svg>
  );
};
export default SunCloudAngledZap_02;
