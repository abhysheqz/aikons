import React from "react";
const CheckUnread_01: React.FC<
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
        d="M18.848 7.633c-1.221.453-2.57 1.467-3.91 2.778l-.714.699-1.399-1.43.715-.7c1.408-1.376 2.997-2.623 4.612-3.222l.696-.258.652 1.891zM13.287 11.959l-.637.77a51 51 0 0 0-2.733 3.66c-.337.495-.88 1.344-1.062 1.63l-.94 1.481-.81-1.552c-.677-1.355-1.446-2.106-2.006-2.514-.282-.205-.842-.46-1.333-.586l-.266-.066.515-1.933.242.06s.85.243.985.303c.27.12.628.31 1.033.605.543.395 1.16.97 1.753 1.795l.236-.349a53 53 0 0 1 2.844-3.806l.636-.771z"
      />
      <path
        fill="currentColor"
        d="m19.086 20.5 1.414-1.414L4.914 3.5 3.5 4.914z"
      />
    </svg>
  );
};
export default CheckUnread_01;
