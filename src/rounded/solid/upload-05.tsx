import React from "react";
const Upload_05: React.FC<
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
        d="M4 5a1 1 0 0 0 1 1h14a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1M13.006 19a1 1 0 1 1-2 0v-6.5h-.594c-.176 0-.392 0-.568-.022H9.84c-.126-.016-.702-.088-.976-.653-.275-.567.027-1.067.092-1.176l.002-.004c.093-.153.227-.324.337-.464l.024-.03c.294-.376.676-.86 1.057-1.251.19-.196.407-.397.638-.556.205-.14.555-.344.986-.344s.78.203.986.344c.231.16.448.36.638.556.38.39.762.875 1.057 1.25l.024.03c.11.141.244.312.336.465l.003.004c.065.109.367.609.092 1.176-.274.565-.85.637-.977.653h-.003a5 5 0 0 1-.568.022h-.582z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_05;
