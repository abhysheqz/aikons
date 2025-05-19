import React from "react";
const TimeSchedule: React.FC<
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
        d="M12 3a9 9 0 1 0 .925 17.953 1 1 0 1 1 .203 1.99Q12.57 23 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11c0 .752-.076 1.488-.22 2.199a1 1 0 1 1-1.96-.398q.178-.873.18-1.801a9 9 0 0 0-9-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7a1 1 0 0 1 1 1v3.586l1.207 1.207a1 1 0 0 1-1.414 1.414l-1.5-1.5A1 1 0 0 1 11 12V8a1 1 0 0 1 1-1M15.29 15.357c-.225-.713.54-1.399 1.238-.99l5.801 3.392a.85.85 0 0 1 .001 1.469l-5.8 3.405c-.698.409-1.465-.276-1.24-.99l.99-3.149z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeSchedule;
