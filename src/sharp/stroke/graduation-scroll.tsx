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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.16 9.935c1.033-.388 1.126-2.238.209-4.133-.918-1.895-2.498-3.118-3.53-2.73m3.322 6.863c-1.032.387-2.612-.835-3.53-2.73s-.824-3.746.208-4.133m3.322 6.863-15 9.008c-1.032.387-2.612-.835-3.53-2.73s-.824-3.746.208-4.133l15-9.008"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 13.616c-1.362-.574-4.077-2.659-4.043-6.412m.543 8.508c-1.167-.558-3.6-2.625-4-6.438"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.43 13.942c.703 1.432 1.047 4.761-.873 7.043a.01.01 0 0 1-.016 0l-.965-1.398-2.487 1.175c-.009.004-.019-.005-.013-.014.428-.645 1.657-2.578.876-4.783"
      />
    </svg>
  );
};
export default GraduationScroll;
