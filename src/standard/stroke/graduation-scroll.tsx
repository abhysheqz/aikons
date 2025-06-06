import React from "react";
const GraduationScroll: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.16 9.928c1.033-.386 1.126-2.235.209-4.129-.918-1.893-2.498-3.114-3.53-2.727m3.322 6.856c-1.032.387-2.612-.834-3.53-2.727-.917-1.894-.824-3.743.208-4.13m3.322 6.857-15 9c-1.032.387-2.612-.834-3.53-2.727-.917-1.894-.824-3.743.208-4.13l15-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 13.61c-1.362-.573-4.077-2.656-4.043-6.406m.543 8.5c-1.167-.557-3.6-2.623-4-6.432M15.435 14c.713 1.421 1.062 4.726-.886 6.99a.01.01 0 0 1-.016 0L13.5 19.5l-2.465 1.266c-.01.005-.02-.005-.014-.014.43-.65 1.47-2.785.979-4.752"
      />
    </svg>
  );
};
export default GraduationScroll;
