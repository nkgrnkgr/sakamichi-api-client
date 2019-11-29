type GrounpName = "nogizaka46" | "keyakizaka46" | "hiraganakeyaki";

type MemberProfile = {
  name: string;
  birthday: string;
  bloodType: string;
  constellation: string;
  profilePhotoUri: string;
  blogUri: string;
  goodsUri: string;
  matomeUri: string[];
}

type ListAllMemberProfileParam = {
  grounpName: GrounpName;
};
type ListAllMemberProfileResponse = MemberProfile[];

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
