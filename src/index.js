/**
* Check if a string is a 10-digit Vietnamese phone number.
 * Kiểm tra một chuỗi có phải là số điện thoại Việt Nam 10 số hay không?
 * 文字列が 10 桁のベトナムの電話番号かどうかを確認します。
 * @param {string} phoneNumber  String to check.
 *                              Chuỗi cần kiểm tra.
 *                              チェックする文字列。
 * @return {boolean} true if the phone number is valid, false otherwise.
 *                   trả về true nếu số điện thoại hợp lê, false nếu không hợp lệ.
 *                   電話番号が有効な場合は true を返し、無効な場合は false を返します。
 */
function isVietNamesePhoneNumber10Digits(phoneNumber) {
        const re = /^(0\d{9})$/;
        return re.test(phoneNumber);
    }
    module.exports = {
        isVietNamesePhoneNumber10Digits,
    };