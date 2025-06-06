import React from "react";
const MaskTheater_02: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.445 14.775c.163-.306.439-.529.777-.59.339-.061.672.053.928.282m4.086 3.31c-.327.61-.878 1.057-1.555 1.18-.677.122-1.344-.105-1.855-.565m2.733-4.54c.164-.305.439-.529.777-.59.34-.06.672.053.928.283m.806-5.903c-1.15 1.086-2.899 1.95-4.94 2.318-2.04.368-3.97.168-5.415-.45a.5.5 0 0 0-.289-.035c-.284.05-.47.348-.417.663l.938 5.443c.7 4.058 4.1 6.007 5.677 6.704.522.232 1.098.261 1.658.16s1.092-.33 1.506-.73c1.249-1.208 3.792-4.229 3.092-8.287l-.937-5.443c-.055-.315-.33-.529-.614-.477a.5.5 0 0 0-.26.134"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.316 17.5c.363 0 .723-.065 1.06-.215 1.577-.697 4.977-2.646 5.677-6.704l.938-5.443c.054-.315-.133-.612-.417-.663a.5.5 0 0 0-.289.035c-1.444.618-3.375.818-5.416.45-2.04-.368-3.788-1.232-4.939-2.318a.5.5 0 0 0-.259-.134c-.284-.052-.56.162-.614.477L9.12 8.428c-.083.477-.12.94-.12 1.386"
      />
    </svg>
  );
};
export default MaskTheater_02;
