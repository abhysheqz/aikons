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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 3.38 1.56 6.396 4 8.367V13h1.5v8.383A10.7 10.7 0 0 0 12 22.75a10.7 10.7 0 0 0 5.25-1.367V13h1.5v7.367c2.44-1.97 4-4.987 4-8.367 0-5.937-4.813-10.75-10.75-10.75m0 13c-1.294 0-2.49.428-3.451 1.15l.9 1.2a4.23 4.23 0 0 1 2.55-.85c.958 0 1.84.316 2.55.85l.9-1.2A5.73 5.73 0 0 0 12 14.25M5.968 9.47c.46-.461 1.086-.72 1.737-.72H9.5v1.5H7.706c-.254 0-.497.1-.677.28zm10.323.78H14.5v-1.5h1.793c.652 0 1.277.259 1.738.72l-1.061 1.06a.96.96 0 0 0-.677-.28"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crying;
