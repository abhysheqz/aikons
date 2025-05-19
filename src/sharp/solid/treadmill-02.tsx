import React from "react";
const Treadmill_02: React.FC<
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
        d="M22.75 15.302c0-3.88-3.834-6.596-7.428-5.168L2.564 15.2a2.1 2.1 0 0 0-1.314 1.953c0 1.143.912 2.097 2.07 2.097h15.548c2.159 0 3.882-1.782 3.882-3.948M18 13.25a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 0 0 0-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.973 5.163c-.53.32-1.144.456-1.79.5l-1.835 5.504-1.423-.474 2.17-6.513h.542c.749 0 1.235-.104 1.561-.3.292-.177.55-.485.71-1.132l1.456.364c-.233.93-.68 1.622-1.39 2.051M1.636 8.18h5v1.5h-1.54l1.267 5.068-1.456.364L3.55 9.68H1.636zM5.33 18.58l-1 2 1.342.67 1-2zM17.25 19.251v2h1.5v-2z"
      />
    </svg>
  );
};
export default Treadmill_02;
