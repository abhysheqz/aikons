import React from "react";
const AlphabetThai: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 21v-7c0-.629.247-1.187.742-1.752.488-.577 1.512-.977 2.258-1.2.048-.015.052-.102.006-.122-.65-.284-1.94-.67-2.439-1.327l-.02-.028-.126-.16C6 8.87 6 7.807 6 7.807c0-1.87 1.273-3.368 2.755-4.112Q10.106 3 11.96 3q1.615 0 2.994.605C16.946 4.435 18 6.436 18 8.715V21"
      />
    </svg>
  );
};
export default AlphabetThai;
