import React from "react";
const HeadsetOff: React.FC<
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
        d="M2.25 14A4.75 4.75 0 0 1 7 9.25h1c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 8 18.75H7A4.75 4.75 0 0 1 2.25 14m12-.757 5.242 5.022-1.305.335q-.572.148-1.187.15h-1A1.75 1.75 0 0 1 14.25 17z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.75 14a4.73 4.73 0 0 1-.741 2.548l-.235.392a.2.2 0 0 1-.312.039l-6.137-6.08a.19.19 0 0 1-.056-.16q.008-.053.02-.104a1.75 1.75 0 0 1 1.71-1.385h1A4.75 4.75 0 0 1 21.75 14M4.242 11.027v2.919a1 1 0 0 1-2 0v-2.919a9.73 9.73 0 0 1 3.025-7.061l1.329 1.496a7.73 7.73 0 0 0-2.354 5.565"
      />
      <path
        fill="currentColor"
        d="M11.998 1.271c5.388 0 9.756 4.368 9.756 9.756v6.81c0 .168-.199.242-.317.124l-1.683-1.684v-5.25A7.756 7.756 0 0 0 8.703 4.004c-.443.208-.98.138-1.31-.224-.42-.462-.33-1.193.227-1.474a9.7 9.7 0 0 1 4.378-1.035M16.862 22.729h-4.864a1 1 0 0 1 0-2h4.864c1.42 0 2.601-1.023 2.846-2.373l1.576 1.576a4.89 4.89 0 0 1-4.422 2.797"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2 2 20 20"
      />
    </svg>
  );
};
export default HeadsetOff;
