import React from "react";
const Medal_05: React.FC<
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
        d="M15.5 1.25a.75.75 0 0 1 .686.45l3.5 8a.75.75 0 0 1-.391.99l-3.246 1.39a.5.5 0 0 1-.645-.24l-4.84-9.87a.5.5 0 0 1 .448-.72zm-2.34 11.399L8.436 1.523a.3.3 0 0 0-.37-.169c-.086.04-.166.177-.253.346l-3.5 8a.75.75 0 0 0 .392.99l6.25 2.678-.965 1.952-3.05.24a.775.775 0 0 0-.467 1.34l2.179 2.033-.622 2.904a.775.775 0 0 0 1.114.85l2.858-1.481 2.857 1.482a.775.775 0 0 0 1.115-.85l-.623-2.905 2.18-2.033a.775.775 0 0 0-.468-1.34l-3.05-.24-.965-1.953.184-.079a.2.2 0 0 0 .102-.268zm-2.1-.868L5.99 9.61l2.146-4.891z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medal_05;
