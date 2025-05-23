import React from "react";
const Incognito: React.FC<
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
        d="M3.25 18c0-2.071 1.741-3.75 3.889-3.75.92 0 1.765.308 2.43.823A3.96 3.96 0 0 1 12 14.25c.92 0 1.765.308 2.43.823a3.96 3.96 0 0 1 2.431-.823c2.148 0 3.889 1.679 3.889 3.75s-1.741 3.75-3.889 3.75-3.889-1.679-3.889-3.75c0-.505.104-.986.291-1.426-.34-.28-.781-.449-1.263-.449s-.923.169-1.263.45c.187.439.29.92.29 1.425 0 2.071-1.74 3.75-3.888 3.75S3.25 20.071 3.25 18m3.889-1.875c-1.074 0-1.945.84-1.945 1.875s.871 1.875 1.945 1.875 1.944-.84 1.944-1.875-.87-1.875-1.944-1.875m9.722 0c-1.074 0-1.944.84-1.944 1.875s.87 1.875 1.944 1.875 1.945-.84 1.945-1.875-.871-1.875-1.945-1.875"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.135 2.968c-.923-.742-2.052-.892-3.046-.528-.985.36-1.788 1.204-2.156 2.354-.05.159-.1.368-.176.693L3.464 11H2v2h20v-2h-1.464l-1.293-5.513a10 10 0 0 0-.176-.693c-.368-1.15-1.17-1.994-2.156-2.354-.994-.364-2.123-.214-3.046.528-.126.1-.274.245-.492.456l-.035.034a6 6 0 0 1-.248.234c-.658.561-1.522.561-2.18 0a6 6 0 0 1-.248-.234l-.035-.034c-.218-.211-.366-.355-.492-.456"
      />
    </svg>
  );
};
export default Incognito;
