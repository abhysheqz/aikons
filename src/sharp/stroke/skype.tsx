import React from "react";
const Skype: React.FC<
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
        strokeWidth={1.5}
        d="M14.975 9.99c0-1.1-1.343-1.993-3-1.993s-3 .892-3 1.992 1.343 1.992 3 1.992 3 .892 3 1.992-1.343 1.992-3 1.992-3-.891-3-1.992"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.379 4.852c-1.917-1.627-4.359-.574-5.138.232-2.067 2.14-1.38 5.213.8 6.375-.716 4.378 4.596 10.968 11.436 7.635 1.05.896 4.12 1.675 5.889-1.021 1.657-2.728-.338-5.01-1.414-5.611.117-8.018-8.121-9.766-11.574-7.61Z"
      />
    </svg>
  );
};
export default Skype;
