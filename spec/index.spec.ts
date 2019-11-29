import SakamichiApi from "../src";

describe("src/index.ts", () => {
  test("getMemberCount", async () => {
    const sakamichiApiClient = new SakamichiApi();
    const response = await sakamichiApiClient.getMemberCount({ grounpName: 'hiraganakeyaki' })
    const { data } = response;
    expect(typeof data).toBe('number')
  });
});

describe("src/index.ts", () => {
  test("getOfficialBlogSiteUrl", async () => {
    const sakamichiApiClient = new SakamichiApi();
    const response = await sakamichiApiClient.getOfficialBlogUrl({ grounpName: 'nogizaka46' })
    const { data } = response;
    expect(data).toBe('http://www.nogizaka46.com/')
  });
});

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
