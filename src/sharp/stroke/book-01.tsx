import React from "react";
const Book_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.988 4.007V8.02"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.055 22.061H7.722c-2.257.064-3.491-.581-3.766-2.422m14.099 2.422h1.864m-1.864 0v-5.085m0 0h1.888V2.08a.01.01 0 0 0-.015-.009l-2.435 1.11c-.52.236-1.084.359-1.656.359H6.643c-1.8.18-2.849 1.599-2.687 4.022v9.792c-.031.647 0 1.55 0 2.286m14.099-2.663-10.362-.01c-2.732-.101-3.664 1.05-3.737 2.673"
      />
    </svg>
  );
};
export default Book_01;
