import React from "react";
const Dumbbell_02: React.FC<
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
        d="M22.25 3.164 20.838 1.75l-2.52 2.52 1.415 1.413zM1.75 20.836l1.415 1.414 3.041-3.041-1.414-1.415zM16.143 9.272 14.73 7.858l-6.895 6.895 1.414 1.414z"
      />
      <path
        fill="currentColor"
        d="M6.782 11.22a.75.75 0 0 0-1.06 0l-1.97 1.97 7.06 7.06 1.97-1.97a.75.75 0 0 0 0-1.06zM8.751 20.311l-5.06-5.06-1.47 1.469a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.061 0zM17.22 12.78a.75.75 0 0 0 1.06 0l1.97-1.97-7.06-7.06-1.97 1.97a.75.75 0 0 0 0 1.06zM15.25 3.689l5.061 5.06 1.47-1.469a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.061 0z"
      />
    </svg>
  );
};
export default Dumbbell_02;
