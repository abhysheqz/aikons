import React from "react";
const FlipBottom: React.FC<
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
        d="M19.8 9.247c.001-.499 0-.983-.016-1.463a.99.99 0 0 1 .941-1.033.986.986 0 0 1 1.008.965c.017.52.018 1.035.017 1.537a.987.987 0 0 1-.978.997.99.99 0 0 1-.972-1.003m.89-3.36a.963.963 0 0 1-1.31-.44 3.95 3.95 0 0 0-1.736-1.774 1.01 1.01 0 0 1-.436-1.342.964.964 0 0 1 1.308-.447 5.93 5.93 0 0 1 2.604 2.66c.243.493.05 1.095-.43 1.344M15.25 2.25c0 .552-.437 1-.976 1H9.726a.99.99 0 0 1-.974-1c0-.552.436-1 .974-1h4.55c.538 0 .974.448.974 1m-8.397.064a1.01 1.01 0 0 1-.452 1.336 3.95 3.95 0 0 0-1.78 1.796.963.963 0 0 1-1.31.442 1.01 1.01 0 0 1-.43-1.344A5.93 5.93 0 0 1 5.55 1.85a.964.964 0 0 1 1.302.464M3.275 6.751a.99.99 0 0 1 .94 1.033c-.015.48-.016.964-.015 1.463a.99.99 0 0 1-.972 1.003.987.987 0 0 1-.977-.997c-.002-.502-.001-1.018.016-1.537a.986.986 0 0 1 1.008-.965"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.54 18.506c-.279 1.372-.934 2.682-2.42 3.54-.655.379-1.389.546-2.271.626-.865.078-1.944.078-3.313.078h-3.072c-1.37 0-2.449 0-3.313-.078-.883-.08-1.617-.247-2.271-.625-1.487-.86-2.142-2.17-2.421-3.54-.226-1.11-.215-2.324-.206-3.4q.003-.313.004-.607c0-.953.125-1.85.725-2.47.607-.626 1.51-.78 2.523-.78h12.99c1.013 0 1.915.154 2.522.78.6.62.726 1.517.726 2.47l.003.606c.01 1.077.02 2.291-.206 3.4"
      />
    </svg>
  );
};
export default FlipBottom;
