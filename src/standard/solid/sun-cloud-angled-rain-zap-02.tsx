import React from "react";
const SunCloudAngledRainZap_02: React.FC<
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
        d="M7.455 1a1 1 0 0 1 1 1v.601a4.97 4.97 0 0 1 2.814 1.692A1 1 0 0 1 9.73 5.572a2.95 2.95 0 0 0-4.391-.178A3 3 0 0 0 4.485 7.5c0 .899.39 1.702 1.009 2.253a1 1 0 0 1-1.33 1.494A5 5 0 0 1 2.585 8.5H2a1 1 0 0 1 0-2h.585a5 5 0 0 1 .724-1.758l-.534-.538a1 1 0 1 1 1.42-1.408l.525.528a4.9 4.9 0 0 1 1.735-.723V2a1 1 0 0 1 1-1M9.59 14.14a1 1 0 0 1 .349 1.37L8.757 17.5H10a1 1 0 0 1 .86 1.51l-2.078 3.5a1 1 0 0 1-1.72-1.02l1.181-1.99H7a1 1 0 0 1-.86-1.51l2.079-3.5a1 1 0 0 1 1.37-.35M13.447 19.106a1 1 0 0 1 .447 1.341l-1 2a1 1 0 1 1-1.789-.894l1-2a1 1 0 0 1 1.342-.447m3 0a1 1 0 0 1 .447 1.341l-1 2a1 1 0 1 1-1.789-.894l1-2a1 1 0 0 1 1.342-.447"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 9.365a5.752 5.752 0 0 0-.236 11.218 2.5 2.5 0 0 1-.766-3.36l2.078-3.5a2.5 2.5 0 0 1 4.3 2.553l-.021.035a2.5 2.5 0 0 1 1.122 1.28A2.49 2.49 0 0 1 14.5 18a2.5 2.5 0 0 1 3.909 2.673 5.251 5.251 0 0 0-.162-10.37 6.25 6.25 0 0 0-12.394-.937"
      />
    </svg>
  );
};
export default SunCloudAngledRainZap_02;
