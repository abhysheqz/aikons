import React from "react";
const KeyGeneratorFob: React.FC<
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
        d="M5.935 3.422A2.72 2.72 0 0 1 8.61 1.25h6.781a2.72 2.72 0 0 1 2.675 2.172C18.627 6.181 19.75 12.038 19.75 15a7.75 7.75 0 0 1-15.5 0c0-2.962 1.123-8.82 1.685-11.578M12 11.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M7.25 15a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m5.5-10.5a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyGeneratorFob;
