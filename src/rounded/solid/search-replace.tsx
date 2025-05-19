import React from "react";
const SearchReplace: React.FC<
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
        d="M16.685 16.685a.977.977 0 0 1 1.382 0l4.398 4.397a.977.977 0 0 1-1.383 1.383l-4.397-4.398a.977.977 0 0 1 0-1.382"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.023 3.205a7.82 7.82 0 0 0-7.818 7.818.977.977 0 1 1-1.955 0c0-5.398 4.375-9.773 9.773-9.773a9.74 9.74 0 0 1 6.904 2.856V2.227a.977.977 0 1 1 1.954 0v4.887c0 .54-.437.977-.977.977h-4.46a.977.977 0 1 1 0-1.955h2.682a7.8 7.8 0 0 0-6.103-2.931m8.795 6.84c.54 0 .977.438.977.978 0 5.397-4.375 9.773-9.772 9.773a9.74 9.74 0 0 1-6.904-2.857v1.88a.977.977 0 0 1-1.955 0v-4.887a.977.977 0 0 1 .978-.978h4.46a.977.977 0 0 1 0 1.955H4.92a7.818 7.818 0 0 0 13.922-4.886c0-.54.437-.978.977-.978"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchReplace;
