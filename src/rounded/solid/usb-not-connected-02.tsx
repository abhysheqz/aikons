import React from "react";
const UsbNotConnected_02: React.FC<
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
        d="M12.043 11.543a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414l-2.293 2.293 2.293 2.293a1 1 0 1 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.288 1.25h-.076c-.67 0-1.229 0-1.681.046-.474.048-.913.153-1.309.417-.3.201-.558.459-.759.76-.264.395-.369.835-.417 1.308C6 4.233 6 4.792 6 5.461v.694c0 .185 0 .278-.04.347-.04.07-.135.126-.325.237a2.5 2.5 0 0 0-.505.39c-.51.509-.71 1.137-.798 1.793-.082.612-.082 1.376-.082 2.262v5.682c0 .817 0 1.375.096 1.86a5 5 0 0 0 3.934 3.928c.486.096 1.044.096 1.863.096h.231c.82 0 1.378 0 1.863-.096a5 5 0 0 0 1.526-.573 1 1 0 1 0-.998-1.733c-.28.161-.589.279-.918.344-.266.053-.61.058-1.588.058-.98 0-1.323-.005-1.589-.058a3 3 0 0 1-2.362-2.357c-.053-.265-.058-.608-.058-1.585v-5.5c0-.971.002-1.599.064-2.061.059-.433.153-.57.23-.645.076-.077.213-.171.648-.23.463-.062 1.092-.064 2.065-.064h2.004c.972 0 1.601.002 2.065.064.435.059.572.153.648.23.11.11.238.324.277 1.248a1 1 0 1 0 1.998-.084c-.04-.948-.162-1.882-.862-2.58a2.5 2.5 0 0 0-.518-.397c-.192-.111-.289-.167-.329-.236-.04-.07-.04-.163-.04-.35v-.683c0-.67 0-1.229-.046-1.681-.048-.473-.153-.913-.418-1.309-.2-.3-.458-.558-.758-.759-.396-.264-.836-.369-1.31-.417-.451-.046-1.01-.046-1.68-.046M8.5 3.977a.75.75 0 0 1 .75-.75h2a.75.75 0 1 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UsbNotConnected_02;
