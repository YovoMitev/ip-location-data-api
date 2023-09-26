import { LocationDataProvider } from '..';
import { ILocationData } from '../../../common/interfaces';
import { IPWHO_API_URL } from '../../../config/environment';

const fetchIpAddressData = async (ip: string) => {
  const response = await fetch(`${IPWHO_API_URL}/${ip}`);
  if (!response.ok) {
    throw new Error('Failed to fetch IP address data');
  }

  const data: ILocationData = await response.json();
  return data;
};

export const getIpAddressData = async (ip: string): Promise<ILocationData> => {
  try {
    let ipLocationData = await LocationDataProvider.findDataByIp(ip);

    if (!ipLocationData) {
      const ipAddressData = await fetchIpAddressData(ip);
      ipLocationData = await LocationDataProvider.createIpLocationData(
        ipAddressData
      );
    }

    return ipLocationData;
  } catch (err) {
    throw new Error(`Failed to get location data for IP: ${ip}`);
  }
};
