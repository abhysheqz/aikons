import React from "react";
const Disability_01: React.FC<
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
        d="M12.5 7a1 1 0 0 1 1 1v1.5H17a1 1 0 1 1 0 2h-3.5v3h1.934a2 2 0 0 1 1.715.971L18.066 17H19.5a1 1 0 1 1 0 2h-1.434a2 2 0 0 1-1.715-.971l-.917-1.529H12.5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1M9.75 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.544 9.835a1 1 0 0 1-.821 1.151c-2.4.401-4.223 2.479-4.223 4.972C5.5 18.738 7.765 21 10.57 21a5.07 5.07 0 0 0 4.12-2.103 1 1 0 1 1 1.62 1.171A7.07 7.07 0 0 1 10.57 23c-3.9 0-7.07-3.148-7.07-7.042 0-3.494 2.552-6.386 5.893-6.944a1 1 0 0 1 1.151.821"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Disability_01;
