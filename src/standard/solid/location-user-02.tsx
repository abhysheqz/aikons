import React from "react";
const LocationUser_02: React.FC<
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
        d="M6.25 12a5.75 5.75 0 1 1 11.5 0v2a.75.75 0 0 1-.75.75h-1.442l-1.34 4.465a.75.75 0 0 1-.718.535h-3a.75.75 0 0 1-.718-.535l-1.34-4.465H7a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 17.996a1 1 0 0 1 1 1c0 .077.032.234.262.468.235.238.624.498 1.183.738C8.559 20.68 10.169 21 12 21s3.44-.32 4.555-.8c.56-.24.948-.5 1.183-.737.23-.234.262-.39.262-.468a1 1 0 1 1 2 0c0 .753-.36 1.386-.838 1.872-.474.48-1.11.868-1.818 1.172-1.419.608-3.309.96-5.344.96s-3.925-.352-5.344-.96c-.708-.304-1.344-.691-1.818-1.172C4.36 20.382 4 19.748 4 18.996a1 1 0 0 1 1-1M9 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationUser_02;
