import React from "react";
const Rar_02: React.FC<
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
        d="M8.684 13.25a2 2 0 0 1 1.06 3.695l.94 2.805h-1.58l-.884-2.5h-.536v2.5h-1.5v-6.5zm0 2.5h-1v-1h1a.5.5 0 0 1 0 1M14.877 18.25H12.99l-.449 1.5h-1.564l2.174-6.5h1.564l2.173 6.5h-1.564zm-.526-1.5h-.835l.418-1.194zM21.684 15.25a2 2 0 0 0-2-2h-2.5v6.5h1.5v-2.5h.536l.885 2.5h1.579l-.94-2.805c.565-.353.94-.98.94-1.695m-2 .5h-1v-1h1a.5.5 0 0 1 0 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.314 1.25-.002 21.5h17.5V21H4.935v-9h14.878V8.63l-7.389-7.38zm9.311 1.955 6.237 6.255h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rar_02;
