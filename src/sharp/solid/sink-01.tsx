import React from "react";
const Sink_01: React.FC<
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
        d="M19.75 6.25V7a7.75 7.75 0 0 1-15.5 0v-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 3a.5.5 0 0 0-.5.5V7h-2V3.5a2.5 2.5 0 0 1 5 0V4h-2v-.5a.5.5 0 0 0-.5-.5M9 5H8V3h2a1 1 0 0 1 1 1v3H9zM16 23H8v-2h8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 15.834V22h5.5v-6.166a9.3 9.3 0 0 1-2.75.416 9.3 9.3 0 0 1-2.75-.416"
      />
    </svg>
  );
};
export default Sink_01;
