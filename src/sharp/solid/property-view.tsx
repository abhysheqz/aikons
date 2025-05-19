import React from "react";
const PropertyView: React.FC<
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
        d="M23.25 18.5s-.332-.526-.367-.579a11.934 11.934 0 0 0-1.422-1.71c-.919-.91-2.318-1.961-3.961-1.961s-3.042 1.051-3.96 1.96a12 12 0 0 0-1.423 1.711c-.035.053-.367.579-.367.579s.332.526.367.579a11.934 11.934 0 0 0 1.422 1.71c.919.91 2.318 1.961 3.961 1.961s3.042-1.051 3.96-1.96a12 12 0 0 0 1.423-1.711c.035-.053.367-.579.367-.579m-5.758-1.75c-.962 0-1.742.784-1.742 1.75s.78 1.75 1.742 1.75h.016c.962 0 1.742-.784 1.742-1.75s-.78-1.75-1.742-1.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.5 1.25A.75.75 0 0 0 .75 2v4.25h19.5V2a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 7.75H.75V20c0 .414.336.75.75.75h9.99a14 14 0 0 1-.266-.343c-.148-.197-1.247-1.907-1.247-1.907l.9-1.422a13.42 13.42 0 0 1 1.608-1.933c.984-.976 2.752-2.395 5.015-2.395 1.027 0 1.953.293 2.75.704zM7.5 13h-2v-1.5h2zm7 0h-5v-1.5h5zm-7 4h-2v-1.5h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertyView;
