import axios, { AxiosInstance, AxiosResponse } from "axios";
import { GetMemberProfileParam, GetMemberProfileResponse, ListAllMemberProfileParam, ListAllMemberProfileResponse, GetMemberCountPram, GetMemberCountResponse, GetOfficialBlogUrlforMobileParam, GetOfficialBlogUrlforMobileResponse, GetOfficialBlogUrlParam, GetOfficialBlogUrlResponse, GetOfficialGoodsSiteUrlParam, GetOfficialGoodsSiteUrlResponse, GetOfficialGoodsSiteUrlforMobileParam, GetOfficialGoodsSiteUrlforMobileResponse } from "./types";

class SakamichiApi {
  private APIClient: AxiosInstance;
  private API_ROOT: string;

  constructor() {
    this.API_ROOT = "http://46api.sakamichi46.com/sakamichi46api/api";
    this.APIClient = axios.create({
      baseURL: `${this.API_ROOT}/`
    });
  }

  async getMemberProfile (
    query: GetMemberProfileParam
  ): Promise<AxiosResponse<GetMemberProfileResponse>> {
    try {
      const response = await this.APIClient.get<
        GetMemberProfileResponse
      >(`/${query.grounpName}/profile/${query.memberName}`);

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  }


  async listAllMemberProfile (
    query: ListAllMemberProfileParam
  ): Promise<AxiosResponse<ListAllMemberProfileResponse>> {
    try {
      const response = await this.APIClient.get<
        ListAllMemberProfileResponse
      >(`/${query.grounpName}/profile`);

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getMemberCount (
    query: GetMemberCountPram
  ): Promise<AxiosResponse<GetMemberCountResponse>> {
    try {
      const response = await this.APIClient.get<
        GetMemberCountResponse
      >(`/${query.grounpName}/count`);

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getOfficialBlogUrl (
    query: GetOfficialBlogUrlParam
  ): Promise<AxiosResponse<GetOfficialBlogUrlResponse>> {
    try {
      const response = await this.APIClient.get<
        GetOfficialBlogUrlforMobileResponse
      >(`/${query.grounpName}/blog`);

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getOfficialBlogUrlforMobile (
    query: GetOfficialBlogUrlforMobileParam
  ): Promise<AxiosResponse<GetOfficialBlogUrlforMobileResponse>> {
    try {
      const response = await this.APIClient.get<
        GetOfficialBlogUrlforMobileResponse
      >(`/${query.grounpName}/blog/mobile`);

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getOfficialGoodsSiteUrl(
    query: GetOfficialGoodsSiteUrlParam
  ): Promise<AxiosResponse<GetOfficialGoodsSiteUrlResponse>> {
    try {
      const response = await this.APIClient.get<
        GetOfficialGoodsSiteUrlResponse
      >(`/${query.grounpName}/goods`);

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async getOfficialGoodsSiteUrlforMobile(
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
