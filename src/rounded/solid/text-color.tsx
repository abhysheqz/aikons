import React from "react";
const TextColor: React.FC<
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
        d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M11.18 5.013c-.514.955-1.075 2.42-1.87 4.502L9.125 10h5.75l-.184-.485c-.795-2.082-1.356-3.547-1.87-4.502C12.274 3.99 12.01 4 12.002 4c-.01 0-.273-.01-.822 1.013M15.64 12l2.426 6.357a1 1 0 0 0 1.869-.714L16.53 8.725c-.759-1.988-1.365-3.575-1.946-4.658C14.037 3.047 13.27 2 12 2S9.964 3.048 9.417 4.067c-.582 1.083-1.188 2.67-1.946 4.658l-3.405 8.918a1 1 0 1 0 1.869.714L8.36 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextColor;
