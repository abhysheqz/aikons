import React from "react";
const SignLanguageC: React.FC<
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
        d="M4 21v-6.82c0-2.627 0-3.941.359-5.09.51-1.634 2.315-3.382 3.714-4.4.716-.52 2.445-.976 4.159-1.498a4.24 4.24 0 0 1 2.535.004l2.968.96a1.49 1.49 0 0 1-1.087 2.775m-6.54.855 2.223-.983a4 4 0 0 1 2.421-.26l1.896.388M12 21c0-1.5 2.18-2.417 2.18-2.417l5.38-3.146c.63-.512.32-1.266-.247-1.642-1.834-1.216-3.594-.156-5.287.687-1.473.732-3.408-.333-3.408-1.972 0-2.235 3.487-3.266 5.267-2.558l2.194.644c.81.238 1.659-.232 1.872-1.035a1.46 1.46 0 0 0-.915-1.742l-2.388-.888"
      />
    </svg>
  );
};
export default SignLanguageC;
