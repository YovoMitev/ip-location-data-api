import { Request, Response } from 'express';
import { LocationDataService } from '..';

export const getIpAddressDataAction = async (req: Request, res: Response) => {
  const { ip } = req.params;

  try {
    const ipLocationData = await LocationDataService.getIpAddressData(ip);
    return res.json({ statusCode: 200, data: ipLocationData });
  } catch (_) {
    res.json({
      statusCode: 401,
      error: 'Something went wrong!',
    });
  }
};
