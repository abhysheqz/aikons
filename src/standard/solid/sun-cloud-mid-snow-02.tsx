import React from "react";
const SunCloudMidSnow_02: React.FC<
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
        d="M7.455 1a1 1 0 0 1 1 1v.601a4.97 4.97 0 0 1 2.814 1.692A1 1 0 0 1 9.73 5.572a2.95 2.95 0 0 0-4.391-.178A3 3 0 0 0 4.485 7.5c0 .899.39 1.702 1.009 2.253a1 1 0 0 1-1.33 1.494A5 5 0 0 1 2.585 8.5H2a1 1 0 0 1 0-2h.585a5 5 0 0 1 .724-1.758l-.534-.538a1 1 0 1 1 1.42-1.408l.525.528a4.9 4.9 0 0 1 1.735-.723V2a1 1 0 0 1 1-1M12 15a1 1 0 0 1 1 1v1.234l.986-.592a1 1 0 0 1 1.028 1.716l-1.07.642 1.07.642a1 1 0 0 1-1.029 1.716L13 20.766V22a1 1 0 1 1-2 0v-1.234l-.985.592a1 1 0 0 1-1.03-1.716L10.057 19l-1.07-.642a1 1 0 0 1 1.028-1.716l.986.592V16a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 15a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 17.5 20.75h-.512a2.5 2.5 0 0 0-.487-1.75 2.5 2.5 0 0 0-2.206-3.992 2.5 2.5 0 0 0-4.59 0A2.5 2.5 0 0 0 7.499 19a2.5 2.5 0 0 0-.487 1.75H7A5.75 5.75 0 0 1 1.25 15"
      />
    </svg>
  );
};
export default SunCloudMidSnow_02;
