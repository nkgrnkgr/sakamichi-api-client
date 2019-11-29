type GrounpName = "nogizaka46" | "keyakizaka46" | "hiraganakeyaki";

type GetMemberCountPram = {
  grounpName: GrounpName;
};
type GetMemberCountResponse = number;

type GetOfficialBlogUrlParam = {
  grounpName: GrounpName;
};
type GetOfficialBlogUrlResponse = string;

type GetOfficialBlogUrlforMobileParam = {
  grounpName: GrounpName;
};
type GetOfficialBlogUrlforMobileResponse = string;

type GetOfficialGoodsSiteUrlParam = {
  grounpName: GrounpName;
};
type GetOfficialGoodsSiteUrlResponse = string;

type GetOfficialGoodsSiteUrlforMobileParam = {
  grounpName: GrounpName;
};
type GetOfficialGoodsSiteUrlforMobileResponse = string;
