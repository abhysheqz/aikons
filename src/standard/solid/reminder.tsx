import React from "react";
const Reminder: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 5.248h1.75V11a4.25 4.25 0 0 0 3.004 4.064c.044 2.065 2.245 3.295 3.996 2.39v2.544a2.75 2.75 0 0 1-2.75 2.75h-6a2.75 2.75 0 0 1-2.75-2.75v-12a2.75 2.75 0 0 1 2.75-2.75M8 18a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 1.25A2.75 2.75 0 0 0 7.75 4v7a2.75 2.75 0 0 0 2.75 2.75h.251l.002 1.252c.002 1.03 1.177 1.616 2 .998l2.664-2c.216-.162.48-.25.75-.25H20.5A2.75 2.75 0 0 0 23.25 11V4a2.75 2.75 0 0 0-2.75-2.75zm5.327 3.076a.75.75 0 0 0-.66 0l-.006.003c-.035.02-.125.065-.175.093-.104.057-.25.141-.415.248a5.6 5.6 0 0 0-1.115.92c-.348.385-.712.944-.706 1.628.005.583.275 1.107.752 1.56l-.347 1.56a.75.75 0 1 0 1.465.325l.315-1.418h1.176l.46 1.478a.75.75 0 0 0 1.432-.446l-.476-1.53c.457-.446.714-.96.719-1.529.006-.684-.359-1.243-.707-1.629a5.6 5.6 0 0 0-1.116-.92 7 7 0 0 0-.59-.34z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Reminder;
