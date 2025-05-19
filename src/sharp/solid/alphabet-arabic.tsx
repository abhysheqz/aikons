import React from "react";
const AlphabetArabic: React.FC<
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
        d="M7.5 10.5v-7h2v7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.5 3.5v15h-2v2h3a1 1 0 0 0 1-1v-5h9v-1c0-1.485-1.074-2.747-2.236-3.567C19.064 9.085 17.491 8.5 16 8.5v2c1.01 0 2.187.415 3.11 1.067.437.308.763.627.989.933H13.5v-9z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 18.5v-15h2v16a1 1 0 0 1-1 1h-3v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlphabetArabic;
