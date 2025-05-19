import React from "react";
const UsbError: React.FC<
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
        d="M4.992 6.875a1.75 1.75 0 0 0-1.75 1.75v8.5a5.75 5.75 0 0 0 4.452 5.603c.257.06.438-.241.327-.48-.389-.835-.412-1.848.138-2.823l4.059-7.183a3.15 3.15 0 0 1 2.25-1.573.32.32 0 0 0 .274-.31V8.624a1.75 1.75 0 0 0-1.75-1.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.492 3.125a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4.5a1 1 0 1 1-2 0v-4.5h-5v4.5a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.742 4.875a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M16.483 13.23c-.643-1.14-2.314-1.14-2.957 0l-4.058 7.183c-.647 1.145.236 2.462 1.478 2.462h8.117c1.242 0 2.125-1.317 1.478-2.462zm-1.473 2.404a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0v-1.75a.75.75 0 0 1 .75-.75m-.76 4.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbError;
