import React from "react";
const Nerd: React.FC<
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
        d="M2.354 7.25a10.75 10.75 0 0 1 9.646-6 10.75 10.75 0 0 1 9.646 6h-3.525a2.75 2.75 0 0 0-4.544.448 3 3 0 0 0-3.154 0 2.75 2.75 0 0 0-4.544-.448zm-.604 1.5a10.8 10.8 0 0 0-.5 3.25c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-1.133-.175-2.225-.5-3.25h-3.511q.01.123.011.25a2.75 2.75 0 0 1-5.48.34c-.43-.391-.808-.59-1.27-.59s-.84.199-1.27.59a2.75 2.75 0 0 1-5.469-.59zM12 16.25c1.39 0 2.624-.666 3.4-1.7l1.2.9a5.74 5.74 0 0 1-4.6 2.3 5.74 5.74 0 0 1-4.6-2.3l1.2-.9a4.24 4.24 0 0 0 3.4 1.7M6.75 9a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m8 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Nerd;
