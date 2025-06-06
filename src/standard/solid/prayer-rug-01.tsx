import React from "react";
const PrayerRug_01: React.FC<
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
        d="M3.25 5.5c0-.69.56-1.25 1.25-1.25h3a.25.25 0 0 1 .25.25v11a.25.25 0 0 1-.25.25h-3c-.45 0-.875.108-1.25.3zm6-1v1.25H19.5c.966 0 1.75.784 1.75 1.75v12a1.75 1.75 0 0 1-1.75 1.75h-15a2.75 2.75 0 0 1-2.75-2.75v-13A2.75 2.75 0 0 1 4.5 2.75h3c.966 0 1.75.784 1.75 1.75M14 9.25c-.23 0-.466.054-.651.107a6 6 0 0 0-.565.197 9 9 0 0 0-.434.187l-.02.009h-.83a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .336-.08l.006-.003.028-.013a8 8 0 0 1 .471-.208c.143-.057.289-.11.42-.147.142-.04.219-.049.239-.049a1.4 1.4 0 0 1 .706.162c.18.101.354.259.56.506.148.178.287.367.45.59l.248.339q.23.31.517.653-.288.342-.517.653l-.248.338c-.163.224-.302.414-.45.591-.206.247-.38.405-.56.506-.17.095-.385.162-.706.162-.02 0-.097-.009-.24-.05a5 5 0 0 1-.419-.146 8 8 0 0 1-.471-.208l-.267-.089a1 1 0 0 0-.103-.007h-1a.75.75 0 0 0 0 1.5h.83l.02.009c.11.05.263.119.434.187s.367.14.565.197c.185.053.421.107.651.107.552 0 1.024-.12 1.44-.354.405-.227.715-.538.978-.853.18-.217.364-.468.542-.712l.207-.281c.252-.34.525-.682.863-1.02a.75.75 0 0 0 0-1.06 9 9 0 0 1-.863-1.02q-.102-.136-.207-.281c-.177-.244-.361-.495-.542-.712-.263-.315-.573-.626-.979-.853-.415-.233-.887-.354-1.439-.354"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.75 7.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PrayerRug_01;
