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
    query: GetOfficialGoodsSiteUrlformobileParam
  ): Promise<AxiosResponse<GetOfficialGoodsSiteUrlformobileResponse>> {
    try {
      const response = await this.APIClient.get<
        GetOfficialGoodsSiteUrlformobileResponse
      >(`/${query.grounpName}/goods/mobile`);

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  }
}

export default SakamichiApi;
