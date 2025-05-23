import React from "react";
const Kurta: React.FC<
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
        d="M9.166 1.287A.75.75 0 0 0 8.184 2v2.488l-1.223.479c-1.413.552-2.452 1.095-3.148 1.985-.7.892-.971 2.026-1.143 3.537l-.364 3.206c-.054.479-.077.918-.031 1.3.047.392.174.782.469 1.098.292.314.67.47 1.05.553.374.081.81.104 1.29.104h.846l-.175 4.177c-.01.233-.008.472.032.693.042.23.134.489.345.706s.465.316.691.365c.218.048.456.06.688.06h8.978c.232 0 .47-.012.688-.06.226-.05.481-.15.691-.365.21-.217.303-.476.345-.706.04-.221.042-.46.032-.693l-.175-4.177h.846c.48 0 .916-.023 1.29-.104.38-.083.758-.24 1.05-.553.295-.316.422-.706.47-1.098.046-.382.022-.821-.032-1.3l-.364-3.206c-.172-1.51-.443-2.645-1.143-3.537-.696-.89-1.735-1.433-3.148-1.985l-1.222-.478V2a.75.75 0 0 0-.982-.713c-.258.084-.519.18-.767.272l-.005.002a22 22 0 0 1-.741.264c-.49.162-.924.263-1.321.263-.398 0-.832-.101-1.322-.263q-.361-.122-.74-.264l-.006-.002c-.248-.091-.509-.188-.767-.272m5.152 3.15V3.066q-.259.094-.527.184c-.543.179-1.155.338-1.79.338s-1.248-.16-1.79-.338a17 17 0 0 1-.527-.184v1.372l1.566.522v8.042a.75.75 0 0 0 1.5 0v-.75H13a.75.75 0 0 0 0-1.5h-.25v-2H13a.75.75 0 0 0 0-1.5h-.25V4.96z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Kurta;
