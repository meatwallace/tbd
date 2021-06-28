import _isMobile from 'is-mobile';

export function isMobile(): boolean {
  return _isMobile({ tablet: true, featureDetect: true });
}
