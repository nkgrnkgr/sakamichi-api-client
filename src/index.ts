import axios, { AxiosInstance, AxiosResponse } from "axios";

class SakamichiApi {
  private APIClient: AxiosInstance;
  private API_ROOT: string;

  constructor() {
    this.API_ROOT = "http://46api.sakamichi46.com/sakamichi46api/api";
    this.APIClient = axios.create({
      baseURL: `${this.API_ROOT}/`
    });
  }

  async getOfficialGoodsSiteUrlformobile(
    query: GetOfficialGoodsSiteUrlforMobileParam
  ): Promise<AxiosResponse<GetOfficialGoodsSiteUrlforMobileResponse>> {
    try {
      const response = await this.APIClient.get<
        GetOfficialGoodsSiteUrlforMobileResponse
      >(`/${query.grounpName}/goods/mobile`);

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  }
}

export default SakamichiApi;