import React from "react";
const Crying: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 3.38 1.56 6.396 4 8.367V13a.75.75 0 0 1 1.5 0v8.383A10.7 10.7 0 0 0 12 22.75a10.7 10.7 0 0 0 5.25-1.367V13a.75.75 0 0 1 1.5 0v7.367c2.44-1.97 4-4.987 4-8.367 0-5.937-4.813-10.75-10.75-10.75M9.45 16.6a4.23 4.23 0 0 1 2.55-.85c.958 0 1.84.316 2.55.85a.75.75 0 1 0 .9-1.2A5.73 5.73 0 0 0 12 14.25c-1.294 0-2.49.428-3.45 1.15a.75.75 0 1 0 .9 1.2M6.47 9.47c.46-.461 1.085-.72 1.737-.72H9.5a.75.75 0 0 1 0 1.5H8.207c-.254 0-.497.1-.677.28a.75.75 0 1 1-1.06-1.06m7.28.03a.75.75 0 0 1 .75-.75h1.293c.652 0 1.277.259 1.737.72a.75.75 0 0 1-1.06 1.06.96.96 0 0 0-.677-.28H14.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crying;
