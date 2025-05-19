import React from "react";
const SunCloudLittleRain_02: React.FC<
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
        d="M7.455 1a1 1 0 0 1 1 1v.601a4.97 4.97 0 0 1 2.814 1.692A1 1 0 0 1 9.73 5.572a2.95 2.95 0 0 0-4.391-.178A3 3 0 0 0 4.485 7.5c0 .899.39 1.702 1.009 2.253a1 1 0 0 1-1.33 1.494A5 5 0 0 1 2.585 8.5H2a1 1 0 0 1 0-2h.585a5 5 0 0 1 .724-1.758l-.534-.538a1 1 0 1 1 1.42-1.408l.525.528a4.9 4.9 0 0 1 1.735-.723V2a1 1 0 0 1 1-1M12.501 13.5a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m-3.001 3a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m-8.5 3a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m5.5 0a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m5.5 0a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 15a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1 2.168 9.564A2.5 2.5 0 0 0 17.996 18v-.5a2.5 2.5 0 0 0-2.999-2.45v-.55a2.5 2.5 0 1 0-5 0v.55a2.5 2.5 0 0 0-3.001 2.45v.5a2.5 2.5 0 0 0-2.48 2.187A5.75 5.75 0 0 1 1.25 15"
      />
    </svg>
  );
};
export default SunCloudLittleRain_02;
