import Base64 from "crypto-js/enc-base64";
import CryptoJS from "crypto-js";

const ciphertext = Base64.parse(
	[
		"b0kwc8CLPQp5qRRdNno4IfmuEEExChd7yER9q4D6U+F1+ZrMuaWX8sSqxO9/",
		"yTXmhs2wc0Zq5/9LQHRF50rqc8PDAnLFnqY1uzAczhOcxa2zYz1WIxJAX1lz",
		"kZpGdjcnrkQIK84nJtBVtsG5EOhVuzaj8+LmSQLgM4jgF1W9hzt6zMp7PbA8",
		"C+MLbRxW8Kniu9Anwg3J1AWCCyVL40rjF2mf/AZrDUiPP2DZtVhTay3yz1tQ",
		"fOzJ12OPlin8c8ZEWkENf7SAncLH1les34ai7RozzLBG1pZ/Mcu5IzIE95cH",
		"i/nP9RIu84dhHjR7kRhFuhcH98r4Sv4Osl06rWJ6MA==",
	].join("")
);
const iv = Base64.parse(
	"U2NyZWFtaW5nIGluIGRlc3BhaXIgLSBpcyB0aGlzIHBvc3NpYmxlPyBOby4="
);

export function decrypt(key: string) {
	const decrypted = CryptoJS.AES.decrypt(
		// @ts-expect-error
		{ ciphertext },
		CryptoJS.enc.Utf8.parse(key),
		{
			iv: iv,
			mode: CryptoJS.mode.CBC,
		}
	);

	const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

	return decryptedText;
}
