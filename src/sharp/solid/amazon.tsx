import React from "react";
const Amazon: React.FC<
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
        d="m6 6.5 3.421.472s.257-2.146 2.45-2.146c1.6 0 1.795 1.54 1.629 3.174C7 8 6 11.5 6 13s.5 4 3.5 4c2.4 0 4-1.333 4.5-2l1.5 1.5 2.5-2-.6-.967a2 2 0 0 1-.4-1.2V8.5q.001-.216.005-.467C17.041 5.877 17.105 2 12 2 7.6 2 6.167 5 6 6.5m7.5 3.5c.167 1.5-.1 4.5-2.5 4.5-2.5 0-2-5 2.5-4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.988 18.323C11 22.888 5.5 18.333 2.5 16.5l-.5.658S6.5 22 11 22c6 0 8.5-3 8.5-3z"
      />
      <path
        fill="currentColor"
        d="M20.66 17.506c-1.038-.48-2.833 0-2.833 0L17.5 16.9c1.227-1.013 2.836-.997 3.846-.785.34.07.6.344.636.688.164 1.566-.808 2.984-1.515 3.696l-.531-.399s.723-1.422.723-2.595"
      />
    </svg>
  );
};
export default Amazon;
