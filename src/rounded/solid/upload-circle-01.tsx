import React from "react";
const UploadCircle_01: React.FC<
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
        d="M1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25 1.25 6.063 1.25 12m11.756 4a1 1 0 0 1-2 0v-4.5h-.594c-.176 0-.392 0-.568-.022H9.84c-.127-.016-.703-.088-.977-.653-.275-.567.027-1.067.092-1.175l.002-.005a5 5 0 0 1 .337-.464l.024-.03c.294-.376.676-.86 1.057-1.251.19-.195.407-.397.638-.555.205-.142.555-.345.986-.345s.78.203.986.345c.231.158.448.36.638.555.38.39.762.875 1.057 1.25l.024.031c.11.14.244.311.337.464l.002.005c.065.108.367.608.092 1.175-.274.565-.85.637-.976.653h-.004c-.176.022-.392.022-.568.022h-.582z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UploadCircle_01;
