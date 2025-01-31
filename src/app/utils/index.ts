declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const gtag_report_conversion = (url?: string) => {
    window.gtag('event', 'conversion', {
      'send_to': process.env.GOOGLE_ADS_ID,
      'value': 4000.0,
      'currency': 'UAH',
  });

  if (url) {
    window.location.href = url; 
  }

  return false;
};

