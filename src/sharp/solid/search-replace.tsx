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
        d="m21.368 22.75-4.684-4.684 1.382-1.382 4.684 4.683z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.023 3.205a7.82 7.82 0 0 0-7.818 7.818H1.25c0-5.398 4.375-9.773 9.773-9.773a9.74 9.74 0 0 1 6.904 2.856V2.227h1.954v5.864h-5.438V6.136h2.683a7.8 7.8 0 0 0-6.103-2.931m0 15.636c4.318 0 7.818-3.5 7.818-7.818h1.954c0 5.397-4.375 9.773-9.772 9.773a9.74 9.74 0 0 1-6.904-2.857v1.88H2.164v-5.864h5.438v1.954H4.92a7.8 7.8 0 0 0 6.104 2.932"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchReplace;
