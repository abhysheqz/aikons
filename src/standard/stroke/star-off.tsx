import React from "react";
const StarOff: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 14.151 3.118-3.126a1 1 0 0 0-.55-1.694l-4.756-.757a1 1 0 0 1-.734-.533l-2.187-4.293a1 1 0 0 0-1.782 0L10.461 6M9 8.524l-5.067.807a1 1 0 0 0-.55 1.694l3.403 3.413a1 1 0 0 1 .28.862l-.75 4.764a1 1 0 0 0 1.441 1.046l4.29-2.185a1 1 0 0 1 .907 0l4.289 2.185a1 1 0 0 0 1.441-1.046L18.36 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m2.5 2 20 20"
      />
    </svg>
  );
};
export default StarOff;
