const faviconSrc = `${import.meta.env.BASE_URL}favicon.png`

export function AixelIcon({ size = 40, className = '', ...rest }) {
  return (
    <img
      src={faviconSrc}
      alt="Aixel"
      width={size}
      height={size}
      className={className}
      {...rest}
    />
  )
}
