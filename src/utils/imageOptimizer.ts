import { getDownloadURL, ref } from 'firebase/storage';

import { storage } from '@/utils/firebase';

export enum ImageSize {
  THUMBNAIL = '_thumb',
  MEDIUM = '_medium',
  LARGE = '_large',
  FULLSCREEN = '_fullscreen',
  ORIGINAL = '',
}

// Helper to check if it's a path that we can optimize.
// In this project, paths starting with 'plants/' are considered optimizable.
function isFirebaseStoragePath(path: string): boolean {
  if (!path || typeof path !== 'string') return false;
  return path.startsWith('plants/');
}

/**
 * Constructs the full path for a potentially resized image in Firebase Storage.
 * @param path The base path of the image directory in Firebase Storage.
 * @param size The desired image size.
 * @returns The full path to the image file.
 */
function constructImagePath(path: string, size: ImageSize): string {
  let normalizedPath = path;

  // Ensure path ends with a slash
  if (!normalizedPath.endsWith('/')) {
    normalizedPath += '/';
  }

  const sizeSuffix = size.toString();
  const fileName = `original${sizeSuffix}.jpg`;

  return `${normalizedPath}${fileName}`;
}

/**
 * Fetches a download URL from Firebase Storage, with a fallback to the original image.
 * @param imagePath The full path to the image file in Firebase Storage.
 * @param fallbackPath The full path to the original image to use as a fallback.
 * @returns A promise that resolves with the image URL.
 */
async function fetchUrlWithFallback(
  imagePath: string,
  fallbackPath: string,
): Promise<string> {
  try {
    const imageRef = ref(storage, imagePath);
    return await getDownloadURL(imageRef);
  } catch (error) {
    // Log the error for debugging, e.g., to an error reporting service
    console.warn(
      `Resized image not found at ${imagePath}, falling back to original.`,
      error,
    );
    try {
      const fallbackRef = ref(storage, fallbackPath);
      return await getDownloadURL(fallbackRef);
    } catch (fallbackError) {
      console.error(
        `Fallback image not found at ${fallbackPath}.`,
        fallbackError,
      );
      // Return a placeholder image if both fail
      return `https://placehold.co/600x400/e2e8f0/e2e8f0?text=Not+Found`;
    }
  }
}

/**
 * Gets an optimized image URL from a Firebase Storage path.
 * If the input path is not a recognizable Firebase Storage path, it's returned as is.
 *
 * @param path The original image path from Firestore.
 * @param size The desired size for the image.
 * @returns A promise that resolves to the public URL of the optimized image.
 */
export async function getOptimizedImageUrl(
  path: string,
  size: ImageSize,
): Promise<string> {
  if (!isFirebaseStoragePath(path)) {
    console.log('Not a Firebase Storage path, returning original:', path);
    return Promise.resolve(path);
  }

  const imagePath = constructImagePath(path, size);
  console.log('Constructed image path:', imagePath);
  const fallbackPath = constructImagePath(path, ImageSize.ORIGINAL);

  // No need for client-side caching of the URL itself,
  // as Firebase Storage URLs have a long-lived token and browsers will cache the image content.
  return fetchUrlWithFallback(imagePath, fallbackPath);
}
