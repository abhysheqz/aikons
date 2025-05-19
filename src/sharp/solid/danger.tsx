import React from "react";
const Danger: React.FC<
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
        d="M7.75 11.25a1 1 0 1 0 2 0 1 1 0 0 0-2 0M15.25 12.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 10.413C2.75 5.345 6.899 1.25 12 1.25s9.25 4.095 9.25 9.163a9.06 9.06 0 0 1-1.32 4.72c.164.319.258.68.258 1.063 0 1.03-.67 1.896-1.594 2.206v2.015l-.317.224c-1.135.802-2.32 1.375-3.527 1.72V20h-1.5v2.67a9.8 9.8 0 0 1-2.5 0V20h-1.5v2.36c-1.207-.344-2.392-.917-3.527-1.72l-.317-.223v-2.015a2.33 2.33 0 0 1-1.593-2.206c0-.383.093-.744.258-1.063a9.06 9.06 0 0 1-1.321-4.72m6 3.337a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m4-2.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m1.28 4.72L12 13.94l-2.031 2.03 1.06 1.06.97-.97.97.97z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Danger;
