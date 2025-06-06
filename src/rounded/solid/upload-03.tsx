import React from "react";
const Upload_03: React.FC<
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
        d="M6.75 8.964A1 1 0 0 1 5.785 10c-1.618.058-2.823 1.242-2.785 2.658.008.306.131.731.527 1.993.856 2.731 2.177 4.757 5 5.256.513.09 1.106.094 2.542.094h1.86c1.436 0 2.029-.004 2.542-.094 2.823-.498 4.144-2.525 5-5.256.396-1.262.519-1.687.527-1.993.039-1.415-1.167-2.6-2.785-2.658a1 1 0 1 1 .072-1.998c2.497.09 4.786 1.992 4.712 4.71-.017.624-.242 1.343-.564 2.369l-.053.168c-.938 2.992-2.63 5.934-6.561 6.627-.708.125-1.488.125-2.779.125H10.96c-1.291 0-2.071 0-2.779-.125-3.93-.693-5.623-3.635-6.56-6.627l-.054-.168c-.322-1.026-.547-1.745-.564-2.368C.928 9.992 3.217 8.09 5.714 8a1 1 0 0 1 1.035.963"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.006 14a1 1 0 0 1-2 0V6.5h-.594c-.176 0-.392 0-.568-.022H9.84c-.127-.016-.703-.088-.977-.653-.275-.567.027-1.067.092-1.175l.002-.005a5 5 0 0 1 .337-.464l.024-.03c.294-.376.676-.86 1.057-1.251.19-.195.407-.397.638-.555.205-.142.555-.345.986-.345s.78.203.986.345c.231.158.448.36.638.555.38.39.762.875 1.057 1.25l.024.031c.11.14.244.311.337.464l.002.005c.065.108.367.608.092 1.175-.274.565-.85.637-.976.653h-.004a5 5 0 0 1-.568.022h-.582z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Upload_03;
