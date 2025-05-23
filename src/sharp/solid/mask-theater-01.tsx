import React from "react";
const MaskTheater_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M3.176 2.353 3 2.25h-.75V10c0 7.244 4.684 12.75 9.75 12.75s9.75-5.506 9.75-12.75V2.25H21l-.176.103C18.876 3.498 15.276 4.25 12 4.25s-6.876-.752-8.824-1.897m3.804 8.223c.219-.182.579-.326 1.02-.326s.802.144 1.02.326l.576.48.96-1.152-.576-.48C9.462 8.992 8.75 8.75 8 8.75s-1.461.242-1.98.674l-.576.48.96 1.152zm1.28 4.547-.208-1.25 1.2.42c.196.064.774.25 1.075.334.632.177 1.289.269 1.673.269s1.041-.092 1.673-.269c.3-.084.882-.272 1.079-.335l1.196-.419-.208 1.25-.004.015c-.025.111-.09.396-.136.55-.097.318-.259.75-.515 1.19-.513.88-1.47 1.872-3.085 1.872-1.616 0-2.572-.992-3.085-1.873a5.7 5.7 0 0 1-.515-1.19 10 10 0 0 1-.136-.549zm6.72-4.547c.219-.182.579-.326 1.02-.326s.802.144 1.02.326l.576.48.96-1.152-.576-.48c-.518-.432-1.23-.674-1.98-.674s-1.461.242-1.98.674l-.576.48.96 1.152z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MaskTheater_01;
