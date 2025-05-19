import React from "react";
const MoreOrLess: React.FC<
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
        d="M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.933 2.252a1 1 0 0 1 .085 1.411L6.5 4.25C5.834 5 5.41 5.483 5.163 5.852q-.032.047-.056.087c.386.058.967.061 1.897.061h12.997a1 1 0 0 1 0 2H6.922c-.84 0-1.59 0-2.152-.09-.582-.092-1.355-.344-1.663-1.183-.289-.786.062-1.49.391-1.984.333-.498.854-1.086 1.455-1.765l.05-.055.519-.586a1 1 0 0 1 1.411-.085M17.07 21.748a1 1 0 0 1-.085-1.411l.52-.586c.665-.75 1.09-1.234 1.336-1.603q.032-.047.056-.087C18.51 18.003 17.93 18 17 18H4.003a1 1 0 0 1 0-2h13.079c.84 0 1.59 0 2.152.09.582.092 1.355.344 1.663 1.183.288.786-.062 1.49-.391 1.984-.333.498-.854 1.086-1.456 1.765l-.049.056-.519.585a1 1 0 0 1-1.411.085"
      />
    </svg>
  );
};
export default MoreOrLess;
