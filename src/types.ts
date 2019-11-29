export type GrounpName = "nogizaka46" | "keyakizaka46" | "hiraganakeyaki";

export type MemberProfile = {
  name: string;
  birthday: string;
  bloodType: string;
  constellation: string;
  profilePhotoUri: string;
  blogUri: string;
  goodsUri: string;
  matomeUri: string[];
}

export type GetMemberProfileParam = {
  grounpName: GrounpName;
  memberName: string;
};
export type GetMemberProfileResponse = MemberProfile;

export type ListAllMemberProfileParam = {
  grounpName: GrounpName;
};
export type ListAllMemberProfileResponse = MemberProfile[];

export type GetMemberCountPram = {
  grounpName: GrounpName;
};
export type GetMemberCountResponse = number;

export type GetOfficialBlogUrlParam = {
  grounpName: GrounpName;
};
export type GetOfficialBlogUrlResponse = string;

export type GetOfficialBlogUrlforMobileParam = {
  grounpName: GrounpName;
};
export type GetOfficialBlogUrlforMobileResponse = string;

export type GetOfficialGoodsSiteUrlParam = {
  grounpName: GrounpName;
};
export type GetOfficialGoodsSiteUrlResponse = string;

export type GetOfficialGoodsSiteUrlforMobileParam = {
  grounpName: GrounpName;
};
export type GetOfficialGoodsSiteUrlforMobileResponse = string;
