import React from "react";
const Plaza: React.FC<
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
        d="M1 22.001a1 1 0 0 1 1-1l20-.013a1 1 0 0 1 .001 2l-20 .012a1 1 0 0 1-1-.999"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.104 6.555a1 1 0 0 1 1.341-.45l7 3.478a1 1 0 0 1 .555.895V22a1 1 0 1 1-2 0V11.098l-6.445-3.202a1 1 0 0 1-.45-1.341"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 2a.75.75 0 0 0-1.044-.69l-9 3.829a.75.75 0 0 0-.456.69V22c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75zm-4.246 8.746a.75.75 0 0 0-.008-1.5l-2 .01a.75.75 0 1 0 .008 1.5zm0 3.997a.75.75 0 0 0-.008-1.5l-2 .01a.75.75 0 0 0 .008 1.5zm0 3.998a.75.75 0 0 0-.008-1.5l-2 .01a.75.75 0 1 0 .008 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plaza;
