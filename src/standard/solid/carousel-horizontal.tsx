import React from "react";
const CarouselHorizontal: React.FC<
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
        d="M6.25 4.75A2.75 2.75 0 0 1 9.004 2l6 .008a2.75 2.75 0 0 1 2.746 2.75v13.99a2.75 2.75 0 0 1-2.75 2.75H9a2.75 2.75 0 0 1-2.75-2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.894 6.3a1 1 0 0 1-.447 1.342l-.894.447a1 1 0 0 0-.553.895v5.528a1 1 0 0 0 .553.894l.894.447a1 1 0 1 1-.894 1.79l-.895-.448A3 3 0 0 1 19 14.512V8.984A3 3 0 0 1 20.658 6.3l.895-.448a1 1 0 0 1 1.341.448M1.106 6.3a1 1 0 0 1 1.341-.447l.895.448A3 3 0 0 1 5 8.984v5.528a3 3 0 0 1-1.658 2.683l-.895.447a1 1 0 1 1-.894-1.789l.894-.447A1 1 0 0 0 3 14.512V8.984a1 1 0 0 0-.553-.895l-.894-.447a1 1 0 0 1-.447-1.341"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CarouselHorizontal;
