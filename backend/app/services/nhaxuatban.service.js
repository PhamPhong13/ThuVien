const { ObjectId } = require("mongodb");
class NhaxuatbanService {
constructor(client) {
this.Nhaxuatban = client.db().collection("nhaxuatbans");
}
// Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
}
module.exports = NhaxuatbanService;