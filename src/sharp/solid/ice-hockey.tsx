import React from "react";
const IceHockey: React.FC<
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
        d="M15.161 17.107 22.75 3.208 21.428 2.5l-7.59 13.898zM11.795 15.304l6.416-12.1-1.327-.698-5.686 10.71a22 22 0 0 0-3.863-1.66c-.79-.246-1.578-.427-2.295-.491-.702-.063-1.418-.023-2.008.251-.69.32-1.104 1.02-1.35 1.691-.259.702-.395 1.534-.426 2.35-.03.819.045 1.663.24 2.394.186.7.518 1.432 1.11 1.85.559.394 1.319.612 2.092.738.791.128 1.682.171 2.566.161 1.764-.02 3.588-.252 4.7-.507l-.335-1.462c-.998.229-2.714.451-4.382.47h-.253l1.545-5.404c.923.39 1.82.846 2.575 1.3z"
      />
      <path
        fill="currentColor"
        d="M14 16.002h4c.698 0 1.046 0 1.33.086a2 2 0 0 1 1.334 1.334c.086.284.086.632.086 1.33 0 .696 0 1.045-.086 1.329a2 2 0 0 1-1.334 1.334c-.284.085-.632.085-1.33.085h-4c-.698 0-1.046 0-1.33-.085a2 2 0 0 1-1.334-1.334c-.086-.284-.086-.633-.086-1.33s0-1.045.086-1.33a2 2 0 0 1 1.334-1.333c.284-.086.632-.086 1.33-.086"
      />
    </svg>
  );
};
export default IceHockey;
