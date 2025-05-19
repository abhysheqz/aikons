import React from "react";
const Printer3d: React.FC<
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
        d="m8.065 11.25 1.685 2.021v1.486a3.75 3.75 0 0 0 1.098 2.652l.622.621a.75.75 0 0 0 1.06 0l.622-.621a3.75 3.75 0 0 0 1.098-2.652v-1.485l1.685-2.022z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 19.25a.75.75 0 0 1 .75.75A2.75 2.75 0 0 1 10 22.75H2a.75.75 0 0 1 0-1.5h8c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 .75-.75M7.25 1.25h9.5V10h-9.5zm6.75 3a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m.75 3.25a.75.75 0 0 0-1.5 0v.01a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 1.25H2a.75.75 0 0 0-.75.75v.5A2.75 2.75 0 0 0 4 5.25h2zM18 5.25h2a2.75 2.75 0 0 0 2.75-2.75V2a.75.75 0 0 0-.75-.75h-4z"
      />
    </svg>
  );
};
export default Printer3d;
