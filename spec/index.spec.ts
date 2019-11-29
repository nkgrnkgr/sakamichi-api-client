import SakamichiApi from "../src";

describe("src/index.ts", () => {
  test("getOfficialGoodsSiteUrlformobile", async () => {
    const sakamichiApiClient = new SakamichiApi();
    const response = await sakamichiApiClient.getOfficialGoodsSiteUrlformobile({ grounpName: 'nogizaka46' })
    const { data } = response;
    expect(data).toBe('http://www.nogizaka46shop.com/msp/')
  });
});
