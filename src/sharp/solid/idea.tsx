import React from "react";
const Idea: React.FC<
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
        d="M12 3.194c-3.768 0-6.806 3.021-6.806 6.727 0 1.268.354 2.451.97 3.462l-1.661 1.011A8.6 8.6 0 0 1 3.25 9.921C3.25 5.123 7.177 1.25 12 1.25s8.75 3.873 8.75 8.671a8.6 8.6 0 0 1-1.253 4.473l-1.66-1.01a6.63 6.63 0 0 0 .969-3.463c0-3.706-3.038-6.727-6.806-6.727"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 15.896c0 .37 0 .68-.02.933a2 2 0 0 1-.189.756c-.28.562-.814 1.008-1.488 1.24-.29.1-.59.14-.907.158-.305.017-.676.017-1.12.017H9.975c-.445 0-.816 0-1.12-.017a3.3 3.3 0 0 1-.907-.157c-.674-.233-1.21-.68-1.489-1.24a2 2 0 0 1-.188-.756c-.021-.254-.021-.564-.021-.934v-.646h11.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 10v6h-2v-6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.289 22.238a.75.75 0 0 0 .711.513h4a.75.75 0 0 0 .712-.513l.728-2.185H8.56z"
      />
    </svg>
  );
};
export default Idea;
