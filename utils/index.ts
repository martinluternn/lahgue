export function formatTimeDifference(timestampMs: number): string {
  if (timestampMs == 0) {
    return "baru saja";
  }
  const timestampSeconds = timestampMs / 1000;

  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifferenceInSeconds = currentTime - timestampSeconds;

  if (timeDifferenceInSeconds < 60) {
    const seconds = Math.floor(timeDifferenceInSeconds);
    return `${seconds} detik`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} menit`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} jam`;
  } else if (timeDifferenceInSeconds < 604800) {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} hari`;
  } else if (timeDifferenceInSeconds < 2629800) {
    const weeks = Math.floor(timeDifferenceInSeconds / 604800);
    return `${weeks} minggu`;
  } else if (timeDifferenceInSeconds < 31557600) {
    const months = Math.floor(timeDifferenceInSeconds / 2629800);
    return `${months} bulan`;
  } else {
    const years = Math.floor(timeDifferenceInSeconds / 31557600);
    return `${years} tahun`;
  }
}
