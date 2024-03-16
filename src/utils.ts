const PUBLIC_IMAGE_BUCKET = import.meta.env.PUBLIC_IMAGE_BUCKET;

export const formatCurrency = (number: number): string => {
  return number.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN'
  });
};

export function getImage(path: string): string {
  const imageURL = PUBLIC_IMAGE_BUCKET + "/" + path + "?alt=media";
  const sanitizedImageURL = imageURL.replace(/([^:]\/)\/+/g, '$1');
  return sanitizedImageURL;
}
