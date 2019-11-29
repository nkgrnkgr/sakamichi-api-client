import SakamichiApi from "../src";

describe("src/index.ts", () => {
  test("getOfficialBlogSiteUrlforMoblie", async () => {
    const sakamichiApiClient = new SakamichiApi();
    const response = await sakamichiApiClient.getOfficialBlogUrlforMobile({ grounpName: 'nogizaka46' })
    const { data } = response;
    expect(data).toBe('http://www.nogizaka46.com/smph/')
  });
});

describe("src/index.ts", () => {
  test("getOfficialGoodsSiteUrl", async () => {
    const sakamichiApiClient = new SakamichiApi();
    const response = await sakamichiApiClient.getOfficialGoodsSiteUrl({ grounpName: 'nogizaka46' })
    const { data } = response;
    expect(data).toBe('http://www.nogizaka46shop.com/')
  });
});


describe("src/index.ts", () => {
  test("getOfficialGoodsSiteUrlforMobile", async () => {
    const sakamichiApiClient = new SakamichiApi();
    const response = await sakamichiApiClient.getOfficialGoodsSiteUrlforMobile({ grounpName: 'nogizaka46' })
    const { data } = response;
    expect(data).toBe('http://www.nogizaka46shop.com/msp/')
  });
});
