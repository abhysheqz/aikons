import React from "react";
const FileView: React.FC<
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
        d="M10.588 1.25c.57 0 1.074-.001 1.55.167q.147.052.287.12c.455.219.811.578 1.214.984l4.783 4.807c.467.469.882.884 1.106 1.428s.223 1.133.222 1.796v3.474q0 .606-.002 1.158C18.758 14.555 17.473 14 16 14c-2.077 0-3.778 1.104-4.812 1.96-.545.452-1.462 1.403-1.79 1.844a2 2 0 0 0 0 2.392q.016.02.036.041c.335.373 1.23 1.368 1.754 1.803.274.227.596.472.958.709l-1.075.001c-1.773 0-3.344 0-4.468-.152-1.166-.157-2.149-.495-2.93-1.28-.78-.783-1.115-1.77-1.272-2.944-.15-1.13-.15-2.566-.15-4.348V9.453c0-1.534 0-2.77.113-3.754.119-1.018.37-1.89.963-2.63.218-.27.463-.518.733-.736.735-.596 1.603-.85 2.616-.968.978-.115 2.386-.115 3.912-.115m7.144 8.254c-.057-.138-.163-.268-.78-.89l-4.606-4.628c-.533-.536-.674-.67-.856-.724v.008c0 1.362 0 2.01.117 2.875.12.9.38 1.658.982 2.26.601.602 1.36.86 2.26.982.866.116 1.515.117 2.883.117"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 15.25c-1.642 0-3.061.883-4.014 1.673-.487.404-.88.806-1.15 1.107-.136.15-.437.521-.437.521a.75.75 0 0 0 0 .898l.436.521c.271.302.664.704 1.15 1.108.954.79 2.373 1.672 4.015 1.672s3.061-.883 4.014-1.672c.487-.404.88-.806 1.15-1.108.132-.146.35-.413.43-.512l.007-.009a.75.75 0 0 0 0-.898l-.007-.009c-.081-.099-.298-.366-.43-.512-.27-.301-.663-.704-1.15-1.107-.953-.79-2.372-1.673-4.014-1.673m-.007 2.25c-.824 0-1.493.672-1.493 1.5s.669 1.5 1.493 1.5h.014c.825 0 1.493-.672 1.493-1.5s-.668-1.5-1.493-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileView;
