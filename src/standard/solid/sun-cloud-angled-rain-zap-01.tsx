import React from "react";
const SunCloudAngledRainZap_01: React.FC<
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
        d="M5.969 4.002a2.85 2.85 0 0 0-2.844 2.857c0 .96.471 1.81 1.197 2.33a1 1 0 0 1-1.163 1.626A4.86 4.86 0 0 1 1.125 6.86a4.85 4.85 0 0 1 4.844-4.857c1.65 0 3.105.827 3.977 2.084a1 1 0 1 1-1.642 1.14 2.84 2.84 0 0 0-2.335-1.224M9.714 13.138a1 1 0 0 1 .35 1.37l-1.182 1.99h1.243a1 1 0 0 1 .86 1.51l-2.078 3.5a1 1 0 1 1-1.72-1.02l1.181-1.99H7.125a1 1 0 0 1-.86-1.51l2.079-3.5a1 1 0 0 1 1.37-.35M14.072 17.104a1 1 0 0 1 .448 1.341l-1.5 3a1 1 0 1 1-1.79-.894l1.5-3a1 1 0 0 1 1.342-.447m3 0a1 1 0 0 1 .448 1.341l-1.5 3a1 1 0 1 1-1.79-.894l1.5-3a1 1 0 0 1 1.342-.447"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.978 8.362a5.752 5.752 0 0 0-.236 11.218 2.5 2.5 0 0 1-.766-3.359l2.078-3.5a2.5 2.5 0 1 1 4.3 2.553l-.021.035a2.5 2.5 0 0 1 .792.688 2.5 2.5 0 0 1 3 0 2.5 2.5 0 0 1 3.736 3.119l-.271.543A5.252 5.252 0 0 0 18.372 9.3a6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default SunCloudAngledRainZap_01;
