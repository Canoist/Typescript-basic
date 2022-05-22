enum MemberShip {
    Simple,
    Standard,
    Premium,
}

const membership = MemberShip.Standard;
console.log(membership); // Возвращает "1", т.к. Standard имеет индекс 1

const membershipReverse = MemberShip[2];
console.log(membershipReverse); // Возвращает "Premium"

enum SocialMedia {
    VK = "VK",
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM;
console.log(social); // Возвращает "INSTAGRAM", а не "2"
