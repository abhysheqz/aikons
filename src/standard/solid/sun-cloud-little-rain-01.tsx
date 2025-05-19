import React from "react";
const SunCloudLittleRain_01: React.FC<
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
        d="M5.969 3.813a2.85 2.85 0 0 0-2.844 2.856c0 .961.471 1.811 1.197 2.33a1 1 0 0 1-1.163 1.627 4.86 4.86 0 0 1-2.034-3.957 4.85 4.85 0 0 1 4.844-4.856c1.65 0 3.105.827 3.977 2.084a1 1 0 1 1-1.642 1.14 2.84 2.84 0 0 0-2.335-1.224M12.126 12.688a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m-3.001 3a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m-8.5 3a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m5.5 0a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m5.5 0a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.375 14.188a5.75 5.75 0 0 1 4.603-5.636 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1 1.723 9.832 2.5 2.5 0 0 0-2.474-2.134v-.5a2.5 2.5 0 0 0-2.999-2.45v-.55a2.5 2.5 0 0 0-5 0v.55a2.5 2.5 0 0 0-3.001 2.45v.5c-1.189 0-2.184.83-2.437 1.941a5.75 5.75 0 0 1-2.809-4.942"
      />
    </svg>
  );
};
export default SunCloudLittleRain_01;
