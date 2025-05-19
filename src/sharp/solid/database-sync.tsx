import React from "react";
const DatabaseSync: React.FC<
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
        d="M13.658 16.02c1.046-1.4 2.918-2.09 4.73-1.626a4.39 4.39 0 0 1 2.724 2.039l-1.67.934a2.47 2.47 0 0 0-1.539-1.145c-1.358-.348-2.72.429-3.068 1.674a.95.95 0 0 1-.692.665.97.97 0 0 1-.93-.264l-1.463-1.506 1.39-1.305zm6.7 2.42a.95.95 0 0 0-.693.664c-.349 1.245-1.71 2.022-3.068 1.674a2.47 2.47 0 0 1-1.517-1.108l-1.652.965a4.4 4.4 0 0 0 2.685 1.971c1.811.464 3.683-.226 4.729-1.626l.518.534 1.39-1.305-1.463-1.506a.97.97 0 0 0-.93-.264"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2A.75.75 0 0 1 2 1.25h18a.75.75 0 0 1 .75.75v8.25H1.25zm0 9.75h19.5v2.423a5.811 5.811 0 0 0-7.084.063l-.487-.502-3.213 3.016 2.35 2.418q.222.229.491.38l-1.107.647.335.555H2a.75.75 0 0 1-.75-.75zm15.75-5h-7v-2h7zm-12-2h3v2H5zm3 10.5H5v2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DatabaseSync;
