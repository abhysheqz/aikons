import React from "react";
const SunCloudMidSnow_01: React.FC<
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
        d="M5.969 3.998a2.85 2.85 0 0 0-2.844 2.857c0 .961.471 1.81 1.197 2.33a1 1 0 0 1-1.163 1.627 4.86 4.86 0 0 1-2.034-3.957 4.85 4.85 0 0 1 4.844-4.857c1.65 0 3.105.827 3.977 2.084a1 1 0 1 1-1.642 1.141 2.84 2.84 0 0 0-2.335-1.225M12.125 14.002a1 1 0 0 1 1 1v1.234l.986-.591a1 1 0 0 1 1.029 1.714l-1.071.643 1.07.643a1 1 0 1 1-1.028 1.714l-.986-.59v1.233a1 1 0 0 1-2 0v-1.234l-.985.591a1 1 0 1 1-1.03-1.715l1.072-.642-1.071-.643a1 1 0 1 1 1.029-1.715l.985.592v-1.234a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.375 14.002a5.75 5.75 0 0 1 4.603-5.636 6.252 6.252 0 0 1 12.394.939 5.251 5.251 0 0 1-.747 10.447h-.512a2.5 2.5 0 0 0-.487-1.75 2.5 2.5 0 0 0-2.206-3.992 2.5 2.5 0 0 0-4.59 0 2.5 2.5 0 0 0-2.206 3.992 2.5 2.5 0 0 0-.487 1.75h-.012a5.75 5.75 0 0 1-5.75-5.75"
      />
    </svg>
  );
};
export default SunCloudMidSnow_01;
