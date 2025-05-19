import React from "react";
const Upload_01: React.FC<
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
        d="M3.23 9.01a1 1 0 0 1 .856 1.126A9 9 0 0 0 4 11.4c0 4.812 3.642 8.6 8 8.6s8-3.788 8-8.6q-.001-.646-.086-1.264a1 1 0 0 1 1.982-.272Q22 10.618 22 11.4C22 17.193 17.583 22 12 22S2 17.193 2 11.4q.001-.781.104-1.536a1 1 0 0 1 1.127-.855"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 13a1 1 0 1 1-2 0V6.5h-.594c-.176 0-.392 0-.568-.022h-.003c-.127-.016-.703-.088-.977-.653-.275-.567.027-1.067.092-1.176l.003-.004a5 5 0 0 1 .336-.464l.024-.03c.295-.376.677-.86 1.057-1.251.19-.195.407-.397.638-.556.205-.14.556-.344.986-.344s.781.203.986.344c.231.16.448.36.638.556.38.39.763.875 1.057 1.25l.024.03c.11.141.245.312.337.465l.002.004c.066.109.367.609.092 1.176-.274.565-.85.637-.976.653h-.004a5 5 0 0 1-.568.022H13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_01;
