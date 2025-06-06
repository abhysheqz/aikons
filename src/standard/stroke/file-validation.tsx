import React from "react";
const FileValidation: React.FC<
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
        d="M15.03 6.469a.75.75 0 1 0-1.06 1.06zm.97 2.03-.53.53a.75.75 0 0 0 1.106-.05zm3.076-2.52a.75.75 0 0 0-1.152-.96zM22.25 7a5.75 5.75 0 0 0-5.75-5.75v1.5A4.25 4.25 0 0 1 20.75 7zM16.5 1.25A5.75 5.75 0 0 0 10.75 7h1.5a4.25 4.25 0 0 1 4.25-4.25zM10.75 7a5.75 5.75 0 0 0 5.75 5.75v-1.5A4.25 4.25 0 0 1 12.25 7zm5.75 5.75A5.75 5.75 0 0 0 22.25 7h-1.5a4.25 4.25 0 0 1-4.25 4.25zm-2.53-5.22 1.5 1.5 1.06-1.06-1.5-1.5zm2.606 1.45 2.5-3-1.152-.96-2.5 3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 2H4.5a2 2 0 0 0-2 2v10.184a2 2 0 0 0 .587 1.416l5.829 5.816a2 2 0 0 0 1.413.585H17.5a2 2 0 0 0 2-2v-5.502"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 15h5a2 2 0 0 1 2 2v5"
      />
    </svg>
  );
};
export default FileValidation;
