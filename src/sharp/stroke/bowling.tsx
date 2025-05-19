import React from "react";
const Bowling: React.FC<
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
        strokeWidth={1.5}
        d="m10.564 6.682-.382-2.166C9.952 3.215 10.83 2 12 2s2.047 1.215 1.818 2.516l-.382 2.166c-.574 3.256.989 5.21 2.075 7.914a6.9 6.9 0 0 1 .383 3.765v.003c-.193 1.088-.495 2.8-1.134 3.636H9.24c-.639-.835-.941-2.548-1.134-3.636v-.003a6.9 6.9 0 0 1 .383-3.765c1.086-2.705 2.649-4.658 2.075-7.914Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 20H3.165c-.6-.669-.885-2.04-1.066-2.91a4.78 4.78 0 0 1 .36-3.013c.77-1.633 1.795-2.923 2.02-4.577m2.558 0a5.1 5.1 0 0 1 .07-1.755l.359-1.732C7.68 4.972 6.856 4 5.758 4c-1.1 0-1.923.972-1.708 2.013l.359 1.732c.132.64.143 1.217.07 1.755m2.558 0H4.479m2.558 0c.072.53.226 1.024.429 1.504M18 20h2.835c.6-.668.885-2.038 1.065-2.908v-.003a4.78 4.78 0 0 0-.36-3.012c-.77-1.633-1.794-2.923-2.02-4.577m-2.557 0a5.1 5.1 0 0 0-.07-1.755l-.359-1.732C16.32 4.972 17.144 4 18.242 4c1.1 0 1.923.972 1.708 2.013l-.359 1.732a5.1 5.1 0 0 0-.07 1.755m-2.558 0h2.558m-2.558 0a6 6 0 0 1-.429 1.504"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 8h2"
      />
    </svg>
  );
};
export default Bowling;
